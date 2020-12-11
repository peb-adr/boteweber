import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { InfoData, InfoService } from 'src/app/info/info.service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminInfoComponent implements OnInit {

  public editor_text = ClassicEditor;
  public editor_ny_top = ClassicEditor;
  public editor_ny_bot = ClassicEditor;
  public editor_no_top = ClassicEditor;
  public editor_no_bot = ClassicEditor;

  info: InfoData;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.createEditors();   
    this.loadInfo();
  }
  
  onClick() {
    console.log(this.info.text);
    this.storeInfo();
    // this.resetInfo();
  }

  createEditors() {
    let config = {
      toolbar: [
        'heading', '|',
        'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
        'imageUpload', 'blockQuote', 'mediaEmbed', '|',
        'undo', 'redo'
      ]
    }
      
    ClassicEditor
      .create(document.querySelector('#editor_text'), config)
      .then(editor => {
        this.editor_text = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_ny_top'), config)
      .then(editor => {
        this.editor_ny_top = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_ny_bot'), config)
      .then(editor => {
        this.editor_ny_bot = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_no_top'), config)
      .then(editor => {
        this.editor_no_top = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_no_bot'), config)
      .then(editor => {
        this.editor_no_bot = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });
  }

  loadInfo() {
    this.infoService.getInfo()
    .subscribe((data: InfoData) => {
      this.info = data
    
      this.editor_text.setData(this.info.text);
      this.editor_ny_top.setData(this.info.greets.he.top);
      this.editor_ny_bot.setData(this.info.greets.he.bot);
      this.editor_no_top.setData(this.info.greets.moin.top);
      this.editor_no_bot.setData(this.info.greets.moin.bot);
    });
    
  }
  
  storeInfo() {
    this.info.text = this.editor_text.getData();
    this.info.greets.he.top = this.editor_ny_top.getData();
    this.info.greets.he.bot = this.editor_ny_bot.getData();
    this.info.greets.moin.top = this.editor_no_top.getData();
    this.info.greets.moin.bot = this.editor_no_bot.getData();

    this.infoService.putInfo(this.info)
    .subscribe((data: InfoData) => { });
  }
  
  resetInfo() {
    this.editor_text.setData(this.info.text);
    this.editor_ny_top.setData(this.info.greets.he.top);
    this.editor_ny_bot.setData(this.info.greets.he.bot);
    this.editor_no_top.setData(this.info.greets.moin.top);
    this.editor_no_bot.setData(this.info.greets.moin.bot);
  }
  
}
