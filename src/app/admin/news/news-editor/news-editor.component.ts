import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NewsData } from 'src/app/news/news.service';


@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class AdminNewsEditorComponent implements OnInit {

  @Input()
  data: NewsData = {
    id: -1,
    title: "",
    message: "",
    timestamp: null,
    priority: 1
  };
  @Input()
  isPoster: boolean = false;
  @Output()
  postNews = new EventEmitter<NewsData>();
  @Output()
  putNews = new EventEmitter<NewsData>();
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
    console.log("clicked Create")
    this.postNews.emit(this.data);
  }

  onClickUpdate() {
    console.log("clicked Update")
    this.putNews.emit(this.data);
  }

  onClickDelete() {
    console.log("clicked Delete")
    this.deleteNews.emit(this.data);
  }

  onNewDataTitle(newData: string) {
    // console.log("outside = " + newData)
    this.data.title = newData;
  }

  onNewDataMessage(newData: string) {
    // console.log("outside = " + newData)
    this.data.message = newData;
  }
  
  onChangePriority(change) {
    this.data.priority = change.target.valueAsNumber;
  }
  
}
