import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Synced } from '../synced.component';

@Component({
  selector: 'app-crud-action-pane',
  templateUrl: './crud-action-pane.component.html',
  styleUrls: [
    './crud-action-pane.component.css',
    "../synced.component.css"
  ]
})
export class CrudActionPaneComponent extends Synced implements OnInit {


  @Output()
  create = new EventEmitter<void>();
  @Output()
  update = new EventEmitter<void>();
  @Output()
  reset = new EventEmitter<void>();
  @Output()
  delete = new EventEmitter<void>();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onClickCreate(event) {
    this.create.emit();
  }

  onClickUpdate(event) {
    this.update.emit();
  }

  onClickReset(event) {
    this.reset.emit();
  }

  onClickDelete(event) {
    this.delete.emit();
  }

}
