import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTopbarComponent } from "./topbar/topbar.component";
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNewsEditorComponent } from './news/news-editor/news-editor.component';
import { FormsModule } from '@angular/forms';
import { AdminNewsComponent } from './news/news.component';
import { AdminInfoComponent } from './info/info.component';
import { EditModule } from '../edit/edit.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminTopbarComponent,
    AdminInfoComponent,
    AdminNewsComponent,
    AdminNewsEditorComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    EditModule
  ]
})
export class AdminModule { }
