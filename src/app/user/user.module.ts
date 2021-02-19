import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoModule } from "../info/info.module";
import { NewsModule } from "../news/news.module";
import { UserComponent } from './user.component';
import { UserInfoComponent } from './info/info.component';
import { UserTopbarComponent } from './topbar/topbar.component';
import { UserNewsListComponent } from './news-list/news-list.component';
import { UserNewsCardComponent } from './news-card/news-card.component';
import { UserRoutingModule } from './user-routing.module';
import { UserFrontpageComponent } from './frontpage/frontpage.component';


@NgModule({
  declarations: [
    UserComponent,
    UserTopbarComponent,
    UserInfoComponent,
    UserNewsListComponent,
    UserNewsCardComponent,
    UserFrontpageComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    NewsModule,
    InfoModule
  ]
})
export class UserModule { }
