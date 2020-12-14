import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsData } from 'src/app/news/news.service';

@Component({
  selector: 'app-user-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserNewsCardComponent implements OnInit {

  @Input()
  data: NewsData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
