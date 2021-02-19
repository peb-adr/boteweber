import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {

  constructor() { }
  @Input()
  message: string = "";
  // @Input()
  // show: boolean = false;
  promise: Promise<void>;

  // @Input()
  // hasButtonCancel: boolean = false;
  // @Input()
  // hasButtonYes: boolean = false;
  // @Input()
  // hasButtonNo: boolean = false;
  // @Input()
  // hasButtonOk: boolean = false;

  // @Output()
  // clickCancel = new EventEmitter<void>();
  // @Output()
  // clickYes = new EventEmitter<void>();
  // @Output()
  // clickNo = new EventEmitter<void>();
  // @Output()
  // clickOk = new EventEmitter<void>();
  // @Output()
  // clickVoid = new EventEmitter<void>();
  
  ngOnInit(): void {
  }

  show() {
    // this.promise = new Promise<void>();
  }
  
  onClickCancel() {

  }

  // onClickYes() {

  // }

  // onClickNo() {

  // }

  onClickOk() {

  }

  onClickVoid() {

  }


}
