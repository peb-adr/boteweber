import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NewsData, NewsService } from 'src/app/news/news.service';
import { SyncState } from '../edit/synced.component';
import { AdminNewsEditorComponent } from './news-editor/news-editor.component';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AdminNewsComponent implements OnInit {

  news: NewsData[];

  @ViewChild("posterEditor")
  posterEditor: AdminNewsEditorComponent
  @ViewChildren(AdminNewsEditorComponent)
  editors: QueryList<AdminNewsEditorComponent>
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().toPromise()
    .then((data: NewsData[]) => {
      this.news = data;
      this.preserveLocalChanges();
    })
  }

  preserveLocalChanges() {
    if (this.posterEditor.syncState == SyncState.syncing) {
      this.posterEditor.data = {
        id: -1,
        title: "",
        message: "",
        timestamp: null,
        priority: 1
      };
      this.posterEditor.syncState = SyncState.synced;
    }
    
    for (let i = 0; i < this.news.length; i++) {
      let nEditor = this.getEditorById(this.news[i].id);
      if (nEditor) {
        if (nEditor.syncState == SyncState.unsynced) {
          this.news[i] = nEditor.data;
        }
        if (nEditor.syncState == SyncState.syncing) {
          nEditor.syncState = SyncState.synced;
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

  onClickDebug() {
    // this.testNewsData.message = this.testNewsData.message + ";lkjadsfl"
  }
  
  getEditorById(id: number) {
    return this.editors.find((item) => { return item.data.id == id });
  }
  
}
