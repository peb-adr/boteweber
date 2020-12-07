import { Component, Input, OnInit } from '@angular/core';
import { NewsData } from 'src/app/news/news.service';

@Component({
  selector: 'app-user-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class UserNewsCardComponent implements OnInit {

  @Input()
  data: NewsData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
