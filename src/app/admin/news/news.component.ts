import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { NewsData, NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AdminNewsComponent implements OnInit {

  editors_title: ClassicEditor[] = [];
  editors_message: ClassicEditor[] = [];
  
  news: NewsData[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().toPromise()
    .then((data: NewsData[]) => {
      this.news = data
    })
    .then(() => {
      return this.createEditors();
    })
    .then(() => {
      this.loadNews();
    });
  }

  loadNews() {
    for (let i = 0; i < this.news.length; i++) {
      this.editors_title[i].setData(this.news[i].title);
      this.editors_message[i].setData(this.news[i].message);
    }
  }

  storeNews() {
    for (let i = 0; i < this.news.length; i++) {
      this.news[i].title = this.editors_title[i].getData();
      this.news[i].message = this.editors_message[i].getData();
    }
  }

  createEditors() {
    let config = {
      toolbar: [
        'heading', '|',
        'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
        'imageUpload', 'blockQuote', 'mediaEmbed', '|',
        'undo', 'redo'
      ]
    }

    let promises = [];
    
    for (const n of this.news) {
      promises.push(ClassicEditor
        .create("<p>empty title</p", config)
        .then(editor => {
          document.querySelector("#editor-container").appendChild(editor.ui.element);
          this.editors_title.push(editor);
          console.log(this.editors_title);
        })
        // .catch(error => {
        //   // console.error(error);
        // });
      );

      promises.push(ClassicEditor
        .create("<p>empty message</p>", config)
        .then(editor => {
          document.querySelector("#editor-container").appendChild(editor.ui.element);
          this.editors_message.push(editor);
          console.log(this.editors_message);
        })
        // .catch(error => {
        //   // console.error(error);
        // });
      );
    }

    return Promise.all(promises);
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
  
}
