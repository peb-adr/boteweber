import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  open: boolean = false;
  @Output()
  openChange = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.open = false;
    this.openChange.emit(this.open);
  }
  
}
