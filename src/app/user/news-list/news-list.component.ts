import { Component, OnInit } from '@angular/core';
import { NewsData, NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-user-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class UserNewsListComponent implements OnInit {

  news: NewsData[] = [];
  allNewsIds: number[] = [];

  pageSel = 1;
  pagePer = 5;
  pageButtonsAdj = 2;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsIds().toPromise()
    .then((data: number[]) => {
      this.allNewsIds = data;
    })
    this.newsService.getNews(this.pageSel, this.pagePer).toPromise()
    .then((data: NewsData[]) => {
      this.news = data;
    })
  }

  onPageSelChanged(sel) {
    this.pageSel = sel;
    this.getNews();
  }

  onPagePerChanged(per) {
    this.pagePer = per;
    this.getNews();
  }

}
