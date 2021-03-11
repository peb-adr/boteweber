import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';

export enum ClickedButton {
  CLICK_OK,
  CLICK_CANCEL,
  CLICK_VOID
}

@Injectable({
  providedIn: 'root'
})
export class MessageModalService {

  public message = "";
  private events = new BehaviorSubject<boolean>(false);
  private buttonEvents = new BehaviorSubject<ClickedButton>(null);
  
  constructor() { }

  public show() {
    this.events.next(true);
    this.buttonEvents = new BehaviorSubject<ClickedButton>(null);
    return this.buttonEvents.asObservable();
  }
  
  public get state(): Observable<boolean> {
    return this.events.asObservable();
  }

  public handleBackendError(messageHead: string, retCallback, err) {
    let m = messageHead + "\n\n";
    if (err.error instanceof ErrorEvent) {
      m += "bitte dem Administrator melden."
    }
    else {
      m += "Code: " + err.status + "\n";
      m += "Meldung: " + err.error['error'];
    }
    this.message = m;
    this.show();

    return of(retCallback());
  }
  
  onClickOk() {
    this.buttonEvents.next(ClickedButton.CLICK_OK);
  }

  onClickCancel() {
    this.buttonEvents.next(ClickedButton.CLICK_CANCEL);
  }

  onClickVoid() {
    this.buttonEvents.next(ClickedButton.CLICK_VOID);
  }
  
}
