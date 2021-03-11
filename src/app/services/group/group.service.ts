import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backendUrl } from "src/app/globals";
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';
import { catchError } from 'rxjs/operators';

export interface GroupData {
  id: number;
  name: string;
  subscribers: number[];
}

export function getDefaultGroupData(): GroupData {
  return {
    id: -1,
    name: "",
    subscribers: []
  };
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

  getGroups(page: number = 0, perpage: number = 0) {
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
    return this.http.get<GroupData[]>(backendUrl + "/groups", {
      headers: reqHeaders,
      params: qParams
    })
    .pipe(
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Laden von Gruppen", () => []
      ))
    );
  }

  getGroupIds() {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.get<number[]>(backendUrl + "/groups", {
      headers: reqHeaders,
      params: {idsonly: ''}
    })
    .pipe(
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Laden von Gruppen", () => []
      ))
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
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Laden von Gruppen", getDefaultGroupData
      ))
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
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Erstellen von Gruppen", getDefaultGroupData
      ))
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
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Speichern von Gruppen", getDefaultGroupData
      ))
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
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Löschen von Gruppen", getDefaultGroupData
      ))
    );
  }

}
