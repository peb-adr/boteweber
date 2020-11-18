import { Component, OnInit } from '@angular/core';
import { News, NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe((data: News[]) => { this.news = data })
  }

}
