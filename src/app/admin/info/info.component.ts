import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-admin-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class AdminInfoComponent implements OnInit {

  public editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
