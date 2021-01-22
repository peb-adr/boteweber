import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';

import { AdminTopbarComponent } from "./topbar/topbar.component";
import { AdminComponent } from './admin.component';
import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { AdminNewsEditorComponent } from './news/news-editor/news-editor.component';
import { AdminEditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { AdminEditableListComponent } from './editable-list/editable-list.component';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminTopbarComponent,
    routingComponents,
    AdminNewsEditorComponent,
    AdminEditorComponent,
    AdminEditableListComponent,
    ModalComponent
  ],
  imports: [
    AdminRoutingModule,
    CKEditorModule,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
