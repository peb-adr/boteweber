import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { backendUrl } from "src/app/globals";

export interface InfoData {
  text: string;
  greet_ny_top: string;
  greet_ny_bot: string;
  greet_no_top: string;
  greet_no_bot: string;
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
