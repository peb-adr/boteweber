import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-balloon";
import { NewsData, NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AdminNewsComponent implements OnInit {

  news: NewsData[];
  blankNewsData: NewsData;
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().toPromise()
    .then((data: NewsData[]) => {
      this.news = data
    })
    this.blankNewsData = {
      id: -1,
      timestamp: null,
      title: "",
      message: ""
    }
  }

  post(data: NewsData) {
    data.timestamp = new Date();
    console.log("sending post request with data:");
    console.log(data);
    this.newsService.postNews(data).toPromise()
    .then((data: NewsData) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  put(data: NewsData) {
    console.log("sending put request with data:");
    console.log(data);
    this.newsService.putNewsId(data.id, data).toPromise()
    .then((data: NewsData) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  delete(data: NewsData) {
    console.log("sending delete request with data:");
    console.log(data);
    this.newsService.deleteNewsId(data.id).toPromise()
    .then((data: NewsData) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  onClickDebug() {
    // this.testNewsData.message = this.testNewsData.message + ";lkjadsfl"
  }
  
}
