import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backendUrl } from "src/app/globals";
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

export interface SubscriberData {
  id: number;
  email: string;
  name: string;
  groups: number[];
}

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(
    private http: HttpClient,
    private authenticationService: AdminAuthenticationService,
    private messageModalService: MessageModalService
  ) { }

  getSubscribers(page: number = 0, perpage: number = 0) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    let qParams = {};
    if (page != 0) {
      qParams['page'] = page;
      if (perpage != 0) {
        qParams['perpage'] = perpage;
      }
    }
    return this.http.get<SubscriberData[]>(backendUrl + "/subscribers", {
      headers: reqHeaders,
      params: qParams
    })
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Laden von Abos\n"
        if (err.error instanceof ErrorEvent) {
          m += "bitte dem Administrator melden."
        }
        else {
          m += `Code: ` + err.status + `\n`;
          m += `Meldung: ` + err.error['error'];
        }
        this.messageModalService.message = m;
        this.messageModalService.show();

        return of({
          id: -1,
          email: "",
          name: "",
          groups: []
        })
      })
    );
  }

  getSubscriberIds() {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.get<number[]>(backendUrl + "/subscribers", {
      headers: reqHeaders,
      params: {idsonly: ''}
    })
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Laden von Abos\n"
        if (err.error instanceof ErrorEvent) {
          m += "bitte dem Administrator melden."
        }
        else {
          m += `Code: ` + err.status + `\n`;
          m += `Meldung: ` + err.error['error'];
        }
        this.messageModalService.message = m;
        this.messageModalService.show();

        return of({
          id: -1,
          email: "",
          name: "",
          groups: []
        })
      })
    );
  }

  getSubscriberId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.get<SubscriberData>(backendUrl + "/subscribers/" + id, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Laden von Abos\n"
        if (err.error instanceof ErrorEvent) {
          m += "bitte dem Administrator melden."
        }
        else {
          m += `Code: ` + err.status + `\n`;
          m += `Meldung: ` + err.error['error'];
        }
        this.messageModalService.message = m;
        this.messageModalService.show();

        return of({
          id: -1,
          email: "",
          name: "",
          groups: []
        })
      })
    );
  }

  postSubscriber(subscriber: SubscriberData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.post<SubscriberData>(backendUrl + "/subscribers", subscriber, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Erstellen von Abos\n"
        if (err.error instanceof ErrorEvent) {
          m += "bitte dem Administrator melden."
        }
        else {
          m += `Code: ` + err.status + `\n`;
          m += `Meldung: ` + err.error['error'];
        }
        this.messageModalService.message = m;
        this.messageModalService.show();

        return of({
          id: -1,
          email: "",
          name: "",
          groups: []
        })
      })
    );
  }

  putSubscriberId(id: number, subscriber: SubscriberData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.put<SubscriberData>(backendUrl + "/subscribers/" + id, subscriber, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Speichern von Abos\n"
        if (err.error instanceof ErrorEvent) {
          m += "bitte dem Administrator melden."
        }
        else {
          m += `Code: ` + err.status + `\n`;
          m += `Meldung: ` + err.error['error'];
        }
        this.messageModalService.message = m;
        this.messageModalService.show();

        return of({
          id: -1,
          email: "",
          name: "",
          groups: []
        })
      })
    );
  }

  deleteSubscriberId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.delete<SubscriberData>(backendUrl + "/subscribers/" + id, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Löschen von Abos\n"
        if (err.error instanceof ErrorEvent) {
          m += "bitte dem Administrator melden."
        }
        else {
          m += `Code: ` + err.status + `\n`;
          m += `Meldung: ` + err.error['error'];
        }
        this.messageModalService.message = m;
        this.messageModalService.show();

        return of({
          id: -1,
          email: "",
          name: "",
          groups: []
        })
      })
    );
  }
  
}
