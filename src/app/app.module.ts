import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { InfoComponent } from './info/info.component';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
