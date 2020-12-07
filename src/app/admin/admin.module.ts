import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';

import { AdminTopbarComponent } from "./topbar/topbar.component";
import { AdminComponent } from './admin.component';
import { AdminRoutingModule, routingComponents } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminTopbarComponent,
    routingComponents
  ],
  imports: [
    AdminRoutingModule,
    CKEditorModule,
    CommonModule
  ]
})
export class AdminModule { }
