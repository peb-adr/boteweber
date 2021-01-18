import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NewsData } from 'src/app/news/news.service';


export enum SyncState {
  synced,
  unsynced,
  syncing
}

@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class AdminNewsEditorComponent implements OnInit {

  eSyncState = SyncState;
  
  @Input()
  data: NewsData = {
    id: -1,
    title: "",
    message: "",
    timestamp: null,
    priority: 1
  };
  syncState: SyncState = SyncState.synced;
  @Input()
  isPoster: boolean = false;
  @Output()
  createNews = new EventEmitter<NewsData>();
  @Output()
  updateNews = new EventEmitter<NewsData>();
  @Output()
  resetNews = new EventEmitter<NewsData>();
  @Output()
  deleteNews = new EventEmitter<NewsData>();

  placeholderTitle: string = "Neuer Titel"
  placeholderMessage: string = "Neue Nachricht"

  // @ViewChild('editorTitle')
  // editorTitle: AdminEditorComponent
  // editorMessage = ClassicEditor

  constructor() { }

  ngOnInit(): void {
    // this.titleEditor.setData("hey you")
    // this.createEditors()
  }

  ngAfterViewInit(): void {
    // this.editorTitle.setData(this.data.message)
  }

  onClickCreate() {
    this.syncState = SyncState.syncing;
    console.log("clicked Create")
    this.createNews.emit(this.data);
  }

  onClickUpdate() {
    this.syncState = SyncState.syncing;
    console.log("clicked Update")
    this.updateNews.emit(this.data);
  }

  onClickReset() {
    this.syncState = SyncState.syncing;
    console.log("clicked Reset")
    this.resetNews.emit(this.data);
  }

  onClickDelete() {
    this.syncState = SyncState.syncing;
    console.log("clicked Delete")
    this.deleteNews.emit(this.data);
  }

  onNewDataTitle(newData: string) {
    if (this.isPoster && newData.length == 0) {
      this.syncState = SyncState.synced;
    }
    else {
      this.syncState = SyncState.unsynced;
    }
    this.data.title = newData;
  }

  onNewDataMessage(newData: string) {
    if (this.isPoster && newData.length == 0) {
      this.syncState = SyncState.synced;
    }
    else {
      this.syncState = SyncState.unsynced;
    }
    this.data.message = newData;
  }
  
  onChangePriority(change) {
    if (this.isPoster && change.target.valueAsNumber == 1) {
      this.syncState = SyncState.synced;
    }
    else {
      this.syncState = SyncState.unsynced;
    }
    this.data.priority = change.target.valueAsNumber;
  }
  
}
