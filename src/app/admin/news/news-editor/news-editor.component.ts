import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NewsData } from 'src/app/news/news.service';


@Component({
  selector: 'app-admin-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class AdminNewsEditorComponent implements OnInit {

  @Input()
  data: NewsData;

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

  onClick() {
    // this.editorTitle.setData(this.data.message)
  }

  onNewDataTitle(newData: string) {
    // console.log("outside = " + newData)
  }

  onNewDataMessage(newData: string) {
    // console.log("outside = " + newData)
  }
  
}
