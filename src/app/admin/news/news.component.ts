import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-balloon";
import { NewsData, NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AdminNewsComponent implements OnInit {

  editorsTitle: ClassicEditor[] = [];
  editorsMessage: ClassicEditor[] = [];
  
  news: NewsData[];

  // testNewsData: NewsData = {
  //   id: 32,
  //   timestamp: new Date(),
  //   title: "Ich bin ein Titel",
  //   message: "Ich bin die Nachricht die von der Laenge her dann doch etwas laenger ausfaellt als der Titel."
  // }
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().toPromise()
    .then((data: NewsData[]) => {
      this.news = data
    })
  }

  loadNews() {
    for (let i = 0; i < this.news.length; i++) {
      this.editorsTitle[i].setData(this.news[i].title);
      this.editorsMessage[i].setData(this.news[i].message);
    }
  }

  storeNews() {
    for (let i = 0; i < this.news.length; i++) {
      this.news[i].title = this.editorsTitle[i].getData();
      this.news[i].message = this.editorsMessage[i].getData();
    }
  }

  onClickStore() {
    // console.log(this.info.text);
    // this.storeInfo();
    this.storeNews();
    for (const n of this.news) {
      this.newsService.putNewsId(n.id, n)
        .subscribe((data: NewsData) => { });
    }
  }

  onClickReset() {
    // console.log(this.info.text);
    // this.resetInfo();
    this.loadNews();
  }

  onClickDebug() {
    // this.testNewsData.message = this.testNewsData.message + ";lkjadsfl"
  }
  
}
