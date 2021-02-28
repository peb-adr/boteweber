import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { InfoData, InfoService } from 'src/app/services/info/info.service';
import { AdminEditorComponent } from 'src/app/shared/editor/editor.component';

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
    this.editorNyTop.data = this.info.greet_ny_top;
    this.editorNyBot.data = this.info.greet_ny_bot;
    this.editorNoTop.data = this.info.greet_no_top;
    this.editorNoBot.data = this.info.greet_no_bot;
  }
  
  storeInfo() {
    this.info.text = this.editorText.data;
    this.info.greet_ny_top = this.editorNyTop.data;
    this.info.greet_ny_bot = this.editorNyBot.data;
    this.info.greet_no_top = this.editorNoTop.data;
    this.info.greet_no_bot = this.editorNoBot.data;
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
