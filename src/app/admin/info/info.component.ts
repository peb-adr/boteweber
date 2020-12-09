import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { InfoData, InfoService } from 'src/app/info/info.service';

@Component({
  selector: 'app-admin-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class AdminInfoComponent implements OnInit {

  public editor = ClassicEditor;
  info: InfoData;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfo()
      .subscribe((data: InfoData) => { this.info = data })
  }

}
