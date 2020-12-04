import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoModule } from "../info/info.module";
import { NewsModule } from "../news/news.module";
import { TopbarUserComponent } from './topbar/topbar.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    TopbarUserComponent
  ],
  imports: [
    CommonModule,
    NewsModule,
    InfoModule
  ]
})
export class UserModule { }
