import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-botbar',
  templateUrl: './botbar.component.html',
  styleUrls: ['./botbar.component.css']
})
export class UserBotbarComponent implements OnInit {

  constructor() { }

  
  public get currentYear() : number {
    return new Date().getFullYear();
  }
  

  ngOnInit(): void {
  }

}
