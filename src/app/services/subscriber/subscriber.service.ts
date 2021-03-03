import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backendUrl } from "src/app/globals";
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';

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
    private authenticationService: AdminAuthenticationService
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
    });
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
    });
  }

  getSubscriberId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.get<SubscriberData>(backendUrl + "/subscribers/" + id, {headers: reqHeaders});
  }

  postSubscriber(subscriber: SubscriberData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.post<SubscriberData>(backendUrl + "/subscribers", subscriber, {headers: reqHeaders});
  }

  putSubscriberId(id: number, subscriber: SubscriberData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.put<SubscriberData>(backendUrl + "/subscribers/" + id, subscriber, {headers: reqHeaders});
  }

  deleteSubscriberId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.delete<SubscriberData>(backendUrl + "/subscribers/" + id, {headers: reqHeaders});
  }
  
}
