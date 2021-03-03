import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backendUrl } from "src/app/globals";
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface GroupData {
  id: number;
  name: string;
  subscribers: [number];
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  constructor(
    private http: HttpClient,
    private authenticationService: AdminAuthenticationService,
    private messageModalService: MessageModalService
    ) { }

  getGroups() {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.get<GroupData[]>(backendUrl + "/groups", {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Laden von Gruppen\n"
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
          name: "",
          subscribers: []
        })
      })
    );
  }

  getGroupId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.get<GroupData>(backendUrl + "/groups/" + id, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Laden von Gruppen\n"
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
          name: "",
          subscribers: []
        })
      })
    );
  }

  postGroup(group: GroupData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.post<GroupData>(backendUrl + "/groups", group, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Erstellen von Gruppen\n"
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
          name: "",
          subscribers: []
        })
      })
    );
  }

  putGroupId(id: number, group: GroupData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.put<GroupData>(backendUrl + "/groups/" + id, group, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Speichern von Gruppen\n"
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
          name: "",
          subscribers: []
        })
      })
    );
  }

  deleteGroupId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.delete<GroupData>(backendUrl + "/groups/" + id, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Löschen von Gruppen\n"
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
          name: "",
          subscribers: []
        })
      })
    );
  }

}
