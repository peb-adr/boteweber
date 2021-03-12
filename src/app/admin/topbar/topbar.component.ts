import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-admin-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class AdminTopbarComponent implements OnInit {

  router: Router;
  
  constructor(
    private iRouter: Router,
    private authenticationService: AdminAuthenticationService
    ) {
    this.router = iRouter;
  }

  ngOnInit(): void {
  }

  onClickLogout() {
    this.authenticationService.adminlogout();
    this.router.navigate(['admin/login']);
  }
  
}
