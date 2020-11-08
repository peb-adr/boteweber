import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: { date : Date, title: string, message: string }[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }

}
