import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {

  public adminLoggedIn = false;
  
  constructor(private http: HttpClient) { }

  adminlogin(password: string) {
    if (password === 'pass') {
      this.adminLoggedIn = true;
    }
    else {
      this.adminLoggedIn = false;
    }

    return this.adminLoggedIn;
  }

  adminlogout() {
    this.adminLoggedIn = false;

    return this.adminLoggedIn;
  }
  
}
