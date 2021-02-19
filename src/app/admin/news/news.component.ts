import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NewsData, NewsService } from 'src/app/news/news.service';
import { AdminNewsEditorComponent } from './news-editor/news-editor.component';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AdminNewsComponent implements OnInit {

  news: NewsData[];
  allNewsIds: number[] = [];

  @ViewChild("posterEditor")
  posterEditor: AdminNewsEditorComponent
  @ViewChildren(AdminNewsEditorComponent)
  editors: QueryList<AdminNewsEditorComponent>

  pageSel = 1;
  pagePer = 2;

  constructor(private newsService: NewsService) { }

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
    if (this.posterEditor.isStateSyncing()) {
      this.posterEditor.data = {
        id: -1,
        title: "",
        message: "",
        timestamp: null,
        priority: 1
      };
      this.posterEditor.setStateSynced();
    }
    
    for (let i = 0; i < this.news.length; i++) {
      let nEditor = this.getEditorById(this.news[i].id);
      if (nEditor) {
        if (nEditor.isStateUnsynced()) {
          this.news[i] = nEditor.data;
        }
        if (nEditor.isStateSyncing()) {
          nEditor.setStateSynced();
        }
      }
    }
  }

  create(data: NewsData) {
    data.timestamp = new Date();
    this.newsService.postNews(data).toPromise()
    .then((newData: NewsData) => {
      this.ngOnInit();
    });
  }

  update(data: NewsData) {
    this.newsService.putNewsId(data.id, data).toPromise()
    .then((data: NewsData) => {
      this.ngOnInit();
    });
  }

  reset(data: NewsData) {
    this.ngOnInit();
  }

  delete(data: NewsData) {
    this.newsService.deleteNewsId(data.id).toPromise()
    .then((data: NewsData) => {
      this.ngOnInit();
    });
  }
  
  getEditorById(id: number) {
    return this.editors.find((item) => { return item.data.id == id });
  }

  onPageSelChanged(sel) {
    this.pageSel = sel;
    this.getNews();
  }

  onPagePerChanged(per) {
    this.pagePer = per;
    this.getNews();
  }

  onClickDebug() {
    // this.testNewsData.message = this.testNewsData.message + ";lkjadsfl"
  }
  
}
