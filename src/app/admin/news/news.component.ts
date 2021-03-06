import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CrudActionPaneComponent } from 'src/app/shared/crud-action-pane/crud-action-pane.component';
import { getDefaultNewsData, NewsData, NewsService } from 'src/app/services/news/news.service';
import { AdminNewsEditorComponent } from './news-editor/news-editor.component';
import { ClickedButton, MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AdminNewsComponent implements OnInit {

  news: NewsData[];
  allNewsIds: number[] = [];
  posterNews: NewsData = getDefaultNewsData();

  @ViewChild("posterEditor")
  posterEditor: AdminNewsEditorComponent
  @ViewChild("posterCrudPane")
  posterCrudPane: CrudActionPaneComponent
  @ViewChildren(AdminNewsEditorComponent)
  editors: QueryList<AdminNewsEditorComponent>
  @ViewChildren(CrudActionPaneComponent)
  crudPanes: QueryList<CrudActionPaneComponent>

  pageSel = 1;
  pagePer = 5;
  pageButtonsAdj = 5;

  constructor(
    private newsService: NewsService,
    private messageModalService: MessageModalService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsIds().toPromise()
    .then((data: number[]) => {
      this.allNewsIds = data;
    })
    this.newsService.getNews(this.pageSel, this.pagePer).toPromise()
    .then((data: NewsData[]) => {
      this.news = data;
      this.preserveLocalChanges();
    })
  }

  preserveLocalChanges() {
    if (this.posterCrudPane.isStateSyncing()) {
      this.posterEditor.data = getDefaultNewsData();
      this.posterCrudPane.setStateSynced();
    }
    
    for (let i = 0; i < this.news.length; i++) {
      let nEditor = this.getEditorById(this.news[i].id);
      let nCrudPane = this.getCrudPaneById(this.news[i].id);
      if (nEditor) {
        if (nCrudPane.isStateUnsynced()) {
          this.news[i] = nEditor.data;
        }
        if (nCrudPane.isStateSyncing()) {
          nCrudPane.setStateSynced();
        }
      }
    }
  }
 
  createNews(dataId: number) {
    if (dataId != -1) {
      return;
    }
    let data = this.getEditorById(dataId).data;
    data.timestamp = new Date();
    this.newsService.postNews(data).toPromise()
    .then((newData: NewsData) => {
      this.getNews();
    });
  }

  updateNews(dataId: number) {
    if (dataId < 0) {
      return;
    }
    let editorData = this.getEditorById(dataId).data;
    this.newsService.putNewsId(editorData.id, editorData).toPromise()
    .then((data: NewsData) => {
      this.getNews();
    });
  }

  resetNews(dataId: number) {
    if (dataId < 0) {
      return;
    }
    // let editorData = this.getEditorById(dataId).data;
    this.newsService.getNewsId(dataId).toPromise()
      .then((data: NewsData) => {
        this.getEditorById(dataId).data = data;
        // this.getCrudPaneById(dataId).setStateSynced();
      });
  }

  deleteNews(dataId: number) {
    if (dataId < 0) {
      return;
    }
    let data = this.getEditorById(dataId).data;
    this.newsService.deleteNewsId(data.id).toPromise()
    .then((data: NewsData) => {
      this.getNews();
    });
  }

  changePage(sel) {
    this.pageSel = sel;
    this.getNews();
  }

  changePagePer(per) {
    this.pagePer = per;
    this.getNews();
  }

  getEditorById(id: number) {
    return this.editors.find((item) => { return item.data.id == id });
  }

  getCrudPaneById(id: number) {
    return this.crudPanes.find((item) => { return item.dataId == id });
  }

  onDataChanged(data) {
    this.getCrudPaneById(data.id).setStateUnsynced();
  }

  onDataReverted(data) {
    this.getCrudPaneById(data.id).setStateSynced();
  }

  onPageSelChanged(sel) {
    if (this.crudPanes.some(e => e.isStateUnsynced())) {
      this.messageModalService.message = `Es sind nicht gespeicherte Änderungen vorhanden\nFortfahren?`
      this.messageModalService.show()
      .subscribe(button => {
        if (button === ClickedButton.CLICK_OK) {
          this.changePage(sel);
        }
      })
    }
    else {
      this.changePage(sel);
    }
  }

  onPagePerChanged(per) {
    if (this.crudPanes.some(e => e.isStateUnsynced())) {
      this.messageModalService.message = `Es sind nicht gespeicherte Änderungen vorhanden\nFortfahren?`
      this.messageModalService.show()
      .subscribe(button => {
        if (button === ClickedButton.CLICK_OK) {
          this.changePagePer(per);
        }
      })
    }
    else {
      this.changePagePer(per);
    }
  }
  
}
