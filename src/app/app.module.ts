import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NewsModule } from './services/news/news.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { MessageModalService } from './shared/message-modal/message-modal.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserModule,
    AdminModule,
    SharedModule
  ],
  providers: [MessageModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
