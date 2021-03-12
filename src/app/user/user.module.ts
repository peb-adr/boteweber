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
import { SharedModule } from '../shared/shared.module';
import { UserBotbarComponent } from './botbar/botbar.component';
import { UserContactComponent } from './contact/contact.component';
import { UserPrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    UserComponent,
    UserTopbarComponent,
    UserInfoComponent,
    UserNewsListComponent,
    UserNewsCardComponent,
    UserFrontpageComponent,
    UserSubscribeComponent,
    UserBotbarComponent,
    UserContactComponent,
    UserPrivacyComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    NewsModule,
    InfoModule,
    SharedModule
  ]
})
export class UserModule { }
