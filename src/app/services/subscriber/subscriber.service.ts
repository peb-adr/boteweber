import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backendUrl } from "src/app/globals";

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

  constructor(private http: HttpClient) { }

  getSubscribers(page: number = 0, perpage: number = 0) {
    let qParams = {};
    if (page != 0) {
      qParams['page'] = page;
      if (perpage != 0) {
        qParams['perpage'] = perpage;
      }
    }
    return this.http.get<SubscriberData[]>(backendUrl + "/subscribers", {
      params: qParams
    });
  }

  getSubscriberIds() {
    return this.http.get<number[]>(backendUrl + "/subscribers", {
      params: {idsonly: ''}
    });
  }

  getSubscriberId(id: number) {
    return this.http.get<SubscriberData>(backendUrl + "/subscribers/" + id);
  }

  postSubscriber(subscriber: SubscriberData) {
    return this.http.post<SubscriberData>(backendUrl + "/subscribers", subscriber);
  }

  putSubscriberId(id: number, subscriber: SubscriberData) {
    return this.http.put<SubscriberData>(backendUrl + "/subscribers/" + id, subscriber);
  }

  deleteSubscriberId(id: number) {
    return this.http.delete<SubscriberData>(backendUrl + "/subscribers/" + id);
  }
  
}
