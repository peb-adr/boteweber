import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { backendUrl } from "src/app/globals";
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';

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
    private authenticationService: AdminAuthenticationService
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
      })
    );
  }

  getNewsIds() {
    return this.http.get<number[]>(backendUrl + "/news", {
      params: { idsonly: '' }
    });
  }

  getNewsId(id) {
    return this.http.get<NewsData>(backendUrl + "/news/" + id)
    .pipe(
      map( res => {
        this.convertTimestamp(res);
        return res
      })
    );
  }

  postNews(news: NewsData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.post<NewsData>(backendUrl + "/news", news, {headers: reqHeaders});
  }

  putNewsId(id, news: NewsData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.put<NewsData>(backendUrl + "/news/" + id, news, {headers: reqHeaders});
  }

  deleteNewsId(id) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }
    
    return this.http.delete<NewsData>(backendUrl + "/news/" + id, {headers: reqHeaders});
  }

  private convertTimestamp(res: NewsData) {
    // timestamp is stored as string in json response, so convert to Date before returning
    res.timestamp = new Date(res.timestamp);
  }
  
}
