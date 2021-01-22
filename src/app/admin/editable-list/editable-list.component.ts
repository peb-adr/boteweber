import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-editable-list',
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.css']
})
export class AdminEditableListComponent implements OnInit {

  @Input()
  names: string[] = ["Adrian", "Dehns"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
