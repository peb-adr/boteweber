import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';



@NgModule({
  declarations: [NewsListComponent, NewsCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NewsListComponent
  ]
})
export class NewsModule { }
