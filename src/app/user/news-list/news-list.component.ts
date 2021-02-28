import { Component, OnInit } from '@angular/core';
import { NewsData, NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-user-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class UserNewsListComponent implements OnInit {

  news: NewsData[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe((data: NewsData[]) => { this.news = data });
  }

}
