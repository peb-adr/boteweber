import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-info-admin',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoAdminComponent implements OnInit {

  public editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
