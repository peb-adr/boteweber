import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { backendUrl } from "src/app/globals";

export interface InfoData {
  text: string;
  greets: {
    he: {
      top: string;
      bot: string;
    };
    moin: {
      top: string;
      bot: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<InfoData>(backendUrl + "/info");
  }

  putInfo(info: InfoData) {
    return this.http.put<InfoData>(backendUrl + "/info", info);
  }
  
}
