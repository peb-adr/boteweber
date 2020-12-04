import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { TopbarComponent } from './user/topbar/topbar.component';
import { InfoComponent } from './info/info.component';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    InfoComponent,
    routingComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
