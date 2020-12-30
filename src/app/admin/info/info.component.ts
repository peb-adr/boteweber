import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { InfoData, InfoService } from 'src/app/info/info.service';
import { AdminEditorComponent } from '../editor/editor.component';

// import { ckConfig } from "src/app/globals";

@Component({
  selector: 'app-admin-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminInfoComponent implements OnInit {

  
  // public get info() : InfoData {
  //   return this.info ? this.info : null
  // }
  
  info: InfoData = {} as InfoData;

  @ViewChild("editorText") editorText: AdminEditorComponent
  @ViewChild("editorNyTop") editorNyTop: AdminEditorComponent
  @ViewChild("editorNyBot") editorNyBot: AdminEditorComponent
  @ViewChild("editorNoTop") editorNoTop: AdminEditorComponent
  @ViewChild("editorNoBot") editorNoBot: AdminEditorComponent
  
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfo().toPromise()
    .then((data: InfoData) => {
      this.info = data
    })
  }

  loadInfo() {
    this.editorText.data = this.info.text;
    this.editorNyTop.data = this.info.greets.he.top;
    this.editorNyBot.data = this.info.greets.he.bot;
    this.editorNoTop.data = this.info.greets.moin.top;
    this.editorNoBot.data = this.info.greets.moin.bot;
  }
  
  storeInfo() {
    this.info.text = this.editorText.data;
    this.info.greets.he.top = this.editorNyTop.data;
    this.info.greets.he.bot = this.editorNyBot.data;
    this.info.greets.moin.top = this.editorNoTop.data;
    this.info.greets.moin.bot = this.editorNoBot.data;
  }

  onClickStore() {
    this.storeInfo()
    this.infoService.putInfo(this.info)
    .subscribe((data: InfoData) => { });
  }

  onClickReset() {
    this.loadInfo();
  }
  
}
