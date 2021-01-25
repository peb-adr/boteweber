import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-editable-element',
  templateUrl: './editable-element.component.html',
  styleUrls: ['./editable-element.component.css']
})
export class AdminEditableElementComponent implements OnInit {

  @Input()
  name: string = "";
  @Output()
  clickEdit = new EventEmitter<void>();
  @Output()
  clickDelete = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.clickEdit.emit();
  }

  onClickDelete() {
    this.clickDelete.emit();
  }
  
}
