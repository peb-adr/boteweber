import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NewsData } from 'src/app/news/news.service';


@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class AdminNewsEditorComponent implements OnInit {

  placeholderTitle: string = "Neuer Titel"
  placeholderMessage: string = "Neue Nachricht"

  // @ViewChild('editorTitle')
  // editorTitle: AdminEditorComponent
  // editorMessage = ClassicEditor

  @Input()
  data: NewsData;

  @Output()
  dataChanged = new EventEmitter<NewsData>();
  @Output()
  dataReverted = new EventEmitter<NewsData>();

  initData: NewsData;
  
  // private titleClear = true;
  // private messageClear = true;
  // private priorityClear = true;
  
  constructor() {
    // this.data = {
    //   id: -1,
    //   title: "",
    //   message: "",
    //   timestamp: null,
    //   priority: 1
    // };
  }

  ngOnInit(): void {
    // this.titleEditor.setData("hey you")
    // this.createEditors()
    this.initData = Object.assign({}, this.data);
  }

  ngAfterViewInit(): void {
    // this.editorTitle.setData(this.data.message)
  }

  isDataReverted() {
    // for (let k of Object.keys(this.data)) {
    //   if (this.data[k] !== this.initData[k]) {
    //     return false;
    //   }
    // }
    if (this.data.id != this.initData.id) {
      return false;
    }
    if (this.data.title != this.initData.title) {
      return false;
    }
    if (this.data.message != this.initData.message) {
      return false;
    }
    return true;
  }

  onNewDataTitle(newData: string) {
    this.data.title = newData;
    if (this.isDataReverted()) {
      this.dataReverted.emit(this.data);
    }
    else {
      this.dataChanged.emit(this.data);
    }
  }

  onNewDataMessage(newData: string) {
    this.data.message = newData;
    if (this.isDataReverted()) {
      this.dataReverted.emit(this.data);
    }
    else {
      this.dataChanged.emit(this.data);
    }
  }
  
  onChangePriority(change) {
    this.data.priority = change.target.valueAsNumber;
    if (this.isDataReverted()) {
      this.dataReverted.emit(this.data);
    }
    else {
      this.dataChanged.emit(this.data);
    }
  }
  
}
