import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

import { backendUrl } from "src/app/globals";
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';
import { of } from 'rxjs';

export interface NewsData{
  id: number;
  timestamp: Date;
  title: string;
  message: string;
  priority: number;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
    private authenticationService: AdminAuthenticationService,
    private messageModalService: MessageModalService
    ) { }

  getNews(page: number = 0, perpage: number = 0) {
    let qParams = {};
    if (page != 0) {
      qParams['page'] = page;
      if (perpage != 0) {
        qParams['perpage'] = perpage;
      }
    }
    return this.http.get<NewsData[]>(backendUrl + "/news",{
      params: qParams
    })
    .pipe(
      map( res => {
        for (const n of res) {
          this.convertTimestamp(n)
        }
        return res
      }),

      catchError((err) => {
        let m = "Fehler beim Laden von News\n"
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
          timestamp: new Date(),
          title: "",
          message: "",
          priority: -1
        })
      })
    );
  }

  getNewsIds() {
    return this.http.get<number[]>(backendUrl + "/news", {
      params: { idsonly: '' }
    })
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Laden von News\n"
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
          timestamp: new Date(),
          title: "",
          message: "",
          priority: -1
        })
      })
    );
  }

  getNewsId(id) {
    return this.http.get<NewsData>(backendUrl + "/news/" + id)
    .pipe(
      map( res => {
        this.convertTimestamp(res);
        return res
      }),
      catchError((err) => {
        let m = "Fehler beim Laden von News\n"
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
          timestamp: new Date(),
          title: "",
          message: "",
          priority: -1
        })
      })
    );
  }

  postNews(news: NewsData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.post<NewsData>(backendUrl + "/news", news, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Erstellen von News\n"
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
          timestamp: new Date(),
          title: "",
          message: "",
          priority: -1
        })
      })
    );
  }

  putNewsId(id, news: NewsData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.put<NewsData>(backendUrl + "/news/" + id, news, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Speichern von News\n"
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
          timestamp: new Date(),
          title: "",
          message: "",
          priority: -1
        })
      })
    );
  }

  deleteNewsId(id) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.delete<NewsData>(backendUrl + "/news/" + id, {headers: reqHeaders})
    .pipe(
      catchError((err) => {
        let m = "Fehler beim Löschen von News\n"
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
          timestamp: new Date(),
          title: "",
          message: "",
          priority: -1
        })
      })
    );
  }

  private convertTimestamp(res: NewsData) {
    // timestamp is stored as string in json response, so convert to Date before returning
    res.timestamp = new Date(res.timestamp);
  }
  
}
