import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class AdminSubsComponent implements OnInit {

  router: Router;
  
  constructor(private iRouter: Router) {
    this.router = iRouter;
  }
  
  ngOnInit(): void {
  }

}
