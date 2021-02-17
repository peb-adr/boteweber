import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-editable-element',
  templateUrl: './editable-element.component.html',
  styleUrls: ['./editable-element.component.css']
})
export class AdminEditableElementComponent implements OnInit {

  @Input()
  value;
  @Input()
  name: string = "";
  @Output()
  clickEdit = new EventEmitter<any>();
  @Output()
  clickDelete = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.clickEdit.emit(this.value);
  }

  onClickDelete() {
    this.clickDelete.emit();
  }
  
}
