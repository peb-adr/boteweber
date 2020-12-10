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
    this.infoService.getInfo()
    // .subscribe((data: InfoData) => { this.info = data });
    .subscribe((data: InfoData) => { this.loadInfo(data) });
  }
  
  onClick() {
    console.log(this.info.text);
    this.storeInfo();
    // this.resetInfo();
  }

  loadInfo(data: InfoData) {
    this.info = data

    ClassicEditor
      .create(document.querySelector('#editor_text'))
      .then(editor => {
        editor.setData(this.info.text)
        this.editor_text = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_ny_top'))
      .then(editor => {
        editor.setData(this.info.greets.he.top)
        this.editor_ny_top = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_ny_bot'))
      .then(editor => {
        editor.setData(this.info.greets.he.bot)
        this.editor_ny_bot = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_no_top'))
      .then(editor => {
        editor.setData(this.info.greets.moin.top)
        this.editor_no_top = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });

    ClassicEditor
      .create(document.querySelector('#editor_no_bot'))
      .then(editor => {
        editor.setData(this.info.greets.moin.bot)
        this.editor_no_bot = editor
        // console.log(editor);
      })
      .catch(error => {
        // console.error(error);
      });
  }
  
  storeInfo() {

    this.info.text = this.editor_text.getData();
    this.info.greets.he.top = this.editor_ny_top.getData();
    this.info.greets.he.bot = this.editor_ny_bot.getData();
    this.info.greets.moin.top = this.editor_no_top.getData();
    this.info.greets.moin.bot = this.editor_no_bot.getData();

    this.infoService.putInfo(this.info)
    .subscribe((data: InfoData) => { console.log(data) } );
  }
  
  resetInfo() {

    this.editor_text.setData(this.info.text);
    this.editor_ny_top.setData(this.info.greets.he.top);
    this.editor_ny_bot.setData(this.info.greets.he.bot);
    this.editor_no_top.setData(this.info.greets.moin.top);
    this.editor_no_bot.setData(this.info.greets.moin.bot);
  }
  
}
