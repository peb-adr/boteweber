import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoModule } from "../services/info/info.module";
import { NewsModule } from "../services/news/news.module";
import { UserComponent } from './user.component';
import { UserInfoComponent } from './info/info.component';
import { UserTopbarComponent } from './topbar/topbar.component';
import { UserNewsListComponent } from './news-list/news-list.component';
import { UserNewsCardComponent } from './news-card/news-card.component';
import { UserRoutingModule } from './user-routing.module';
import { UserFrontpageComponent } from './frontpage/frontpage.component';
import { UserSubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    UserTopbarComponent,
    UserInfoComponent,
    UserNewsListComponent,
    UserNewsCardComponent,
    UserFrontpageComponent,
    UserSubscribeComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    NewsModule,
    InfoModule,
  ]
})
export class UserModule { }
