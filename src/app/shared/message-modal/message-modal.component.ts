import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageModalService } from './message-modal.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {

  constructor (private messageModalService: MessageModalService) { }
  @Input()
  message: string = "";
  @Input()
  show: boolean = false;
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
    this.messageModalService.state.subscribe( (state) => {
      this.message = this.messageModalService.message;
      this.show = state;
    })
  }

  // show() {
  //   // this.promise = new Promise<void>();
  // }
  
  onClickCancel(event) {
    console.log("Cancel");
    this.show = false;
    this.messageModalService.onClickCancel();
  }

  // onClickYes() {

  // }

  // onClickNo() {

  // }

  onClickOk(event) {
    console.log("Ok");
    this.show = false;
    this.messageModalService.onClickOk();
  }

  onClickVoid(event) {
    if (!event.target.classList.contains('modal'))
    {
      return;
    }
    console.log("Void");
    this.show = false;
    this.messageModalService.onClickVoid();
  }


}
