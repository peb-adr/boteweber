import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';

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
  private buttonEvents = new Subject<ClickedButton>();
  
  constructor() { }

  public show() {
    this.events.next(true);
    return this.buttonEvents.asObservable();
  }
  
  public get state(): Observable<boolean> {
    return this.events.asObservable();
  }

  public handleBackendError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.message = "Es ist ein Fehler aufgetreten, bitte dem Administrator melden."
      this.show();
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      this.message = `Fehler im Backend\n`
      this.message += `Code: ` + error.status + `\n`;
      this.message += `Meldung: ` + error.error['error'];
      this.show();
    }
    // Return an observable with a user-facing error message.
    // return Observable.;
  }

  onClickCancel() {
    this.buttonEvents.next(ClickedButton.CLICK_OK);
  }

  onClickOk() {
    this.buttonEvents.next(ClickedButton.CLICK_CANCEL);
  }

  onClickVoid() {
    this.buttonEvents.next(ClickedButton.CLICK_VOID);
  }
  
}
