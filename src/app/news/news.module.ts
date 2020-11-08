import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsService } from './news.service';



@NgModule({
  declarations: [NewsListComponent, NewsCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NewsListComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
