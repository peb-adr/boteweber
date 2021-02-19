import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class AdminTopbarComponent implements OnInit {

  router: Router;
  
  constructor(private iRouter: Router) {
    this.router = iRouter;
  }

  ngOnInit(): void {
  }

}
