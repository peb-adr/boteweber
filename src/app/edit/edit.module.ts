import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEditableElementComponent } from './editable-element/editable-element.component';
import { AdminEditorComponent } from './editor/editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminEditableElementComponent,
    AdminEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ],
  exports:
  [
    AdminEditableElementComponent,
    AdminEditorComponent,
  ]
})
export class EditModule { }
