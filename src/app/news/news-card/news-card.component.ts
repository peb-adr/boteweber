import { Component, Input, OnInit } from '@angular/core';
import { News } from "../news.service";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input()
  data: News;
  
  constructor() { }

  ngOnInit(): void {
  }

}
