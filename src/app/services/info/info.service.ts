import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';

import { backendUrl } from "src/app/globals";
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

export interface InfoData {
  text: string;
  greet_ny_top: string;
  greet_ny_bot: string;
  greet_no_top: string;
  greet_no_bot: string;
}

export function getDefaultInfoData(): InfoData {
  return {
    text: "",
    greet_ny_top: "",
    greet_ny_bot: "",
    greet_no_top: "",
    greet_no_bot: ""
  };
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private http: HttpClient,
    private authenticationService: AdminAuthenticationService,
    private messageModalService: MessageModalService
  ) { }

  getInfo() {
    return this.http.get<InfoData>(backendUrl + "/info")
    .pipe(
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Laden von Info", getDefaultInfoData
      ))
    );
  }

  putInfo(info: InfoData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.put<InfoData>(backendUrl + "/info", info, {headers: reqHeaders})
    .pipe(
      catchError(this.messageModalService.handleBackendError.bind(
        this.messageModalService, "Fehler beim Speichern von Info", getDefaultInfoData
      ))
    );
  }
  
}
