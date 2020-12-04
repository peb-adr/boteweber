import { Component, OnInit } from '@angular/core';
import { InfoData, InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: InfoData;
  
  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfo()
    .subscribe((data: InfoData) => {this.info = data});
  }

}
