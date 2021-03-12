import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { backendUrl } from "src/app/globals";

export interface AuthData {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {

  private _adminToken = null;
  
  constructor(private http: HttpClient) { }

  get adminToken() {
    if (!this._adminToken) {
      this._adminToken = localStorage.getItem('adminToken');
    }

    return this._adminToken;
  }
  
  adminlogin(username: string, password: string) {
    return this.http.post<AuthData>(backendUrl + "/adminlogin", null, {
      headers: { 'Authorization': "Basic " + btoa(username + ":" + password) }
    })
    .pipe(
      map( res => {
        localStorage.setItem('adminToken', res.token);
        return res
      })
    );
  }

  adminlogout() {
    this._adminToken = null;
    localStorage.removeItem('adminToken');
  }
  
}
