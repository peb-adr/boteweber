import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NewsData } from 'src/app/news/news.service';
import { Synced } from 'src/app/edit/synced.component';


@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: [
    './news-editor.component.css',
    '../../../edit/synced.component.css'
  ]
})
export class AdminNewsEditorComponent extends Synced implements OnInit {

  placeholderTitle: string = "Neuer Titel"
  placeholderMessage: string = "Neue Nachricht"

  // @ViewChild('editorTitle')
  // editorTitle: AdminEditorComponent
  // editorMessage = ClassicEditor

  constructor() {
    super();
    this.data = {
      id: -1,
      title: "",
      message: "",
      timestamp: null,
      priority: 1
    };
  }

  ngOnInit(): void {
    // this.titleEditor.setData("hey you")
    // this.createEditors()
  }

  ngAfterViewInit(): void {
    // this.editorTitle.setData(this.data.message)
  }

  onNewDataTitle(newData: string) {
    if (this.isPoster && newData.length == 0) {
      this.setStateSynced();
    }
    else {
      this.setStateUnsynced();
    }
    this.data.title = newData;
  }

  onNewDataMessage(newData: string) {
    if (this.isPoster && newData.length == 0) {
      this.setStateSynced();
    }
    else {
      this.setStateUnsynced();
    }
    this.data.message = newData;
  }
  
  onChangePriority(change) {
    if (this.isPoster && change.target.valueAsNumber == 1) {
      this.setStateSynced();
    }
    else {
      this.setStateUnsynced();
    }
    this.data.priority = change.target.valueAsNumber;
  }
  
}
