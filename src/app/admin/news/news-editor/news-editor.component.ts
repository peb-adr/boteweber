import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-balloon";
import { NewsData } from 'src/app/news/news.service';
import { AdminEditorComponent } from '../../editor/editor.component';


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
  
  private createEditors() {
    // let promises = [];

    // promises.push(ClassicEditor
    //   .create(document.querySelector('#editor-title'), ckConfig)
    //   .then(editor => {
    //     this.editorTitle = editor
    //     // console.log(editor);
    //   })
    //   .catch(error => {
    //     // console.error(error);
    //   })
    // );

    // promises.push(ClassicEditor
    //   .create(document.querySelector('#editor-message'), ckConfig)
    //   .then(editor => {
    //     this.editorMessage = editor
    //     // console.log(editor);
    //   })
    //   .catch(error => {
    //     // console.error(error);
    //   })
    // );

    // return Promise.all(promises);
  }

  onClick() {
    // this.editorTitle.setData(this.data.message)
  }
  
  onNewData(newData: string) {
    console.log("outside = " + newData)
  }
  
}
