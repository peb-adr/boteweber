import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';

import { AdminTopbarComponent } from "./topbar/topbar.component";
import { AdminComponent } from './admin.component';
import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { AdminNewsEditorComponent } from './news/news-editor/news-editor.component';
import { AdminEditorComponent } from './edit/editor/editor.component';
import { FormsModule } from '@angular/forms';
import { AdminEditableElementComponent } from './edit/editable-element/editable-element.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminTopbarComponent,
    routingComponents,
    AdminNewsEditorComponent,
    AdminEditorComponent,
    AdminEditableElementComponent,
  ],
  imports: [
    AdminRoutingModule,
    CKEditorModule,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
