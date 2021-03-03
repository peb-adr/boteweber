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

  password = "";
  wrongPassword = false;
  
  constructor(
      private router: Router,
      private authenticationService: AdminAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.wrongPassword = !this.authenticationService.adminlogin(this.password);

    // if (this.wrongPassword) {
    //   this.password = "";
    // }
    // else {
    //   this.router.navigate(['admin']);
    // }

    this.authenticationService.adminlogin(this.password).toPromise()
    .then( () => {
      this.wrongPassword = false;
      this.router.navigate(['admin']);
    })
    .catch( () => {
      this.wrongPassword = true;
      this.password = "";
    })
  }

  log(x) {
    console.log(x);
  }

}
