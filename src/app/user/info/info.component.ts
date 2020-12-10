import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InfoService, InfoData } from 'src/app/info/info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserInfoComponent implements OnInit {

  info: InfoData;
  
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfo()
    .subscribe((data: InfoData) => {this.info = data});
  }

}
