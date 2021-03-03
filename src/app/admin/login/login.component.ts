import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '/src/app/shared/form.css'
  ]
})
export class AdminLoginComponent implements OnInit {

  username = "";
  password = "";
  wrongCredentials = false;
  
  constructor(
      private router: Router,
      private authenticationService: AdminAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.wrongCredentials = !this.authenticationService.adminlogin(this.password);

    // if (this.wrongCredentials) {
    //   this.password = "";
    // }
    // else {
    //   this.router.navigate(['admin']);
    // }

    this.authenticationService.adminlogin(this.username, this.password).toPromise()
    .then( () => {
      this.wrongCredentials = false;
      this.router.navigate(['admin']);
    })
    .catch( () => {
      this.wrongCredentials = true;
      this.password = "";
    })
  }

  log(x) {
    console.log(x);
  }

}
