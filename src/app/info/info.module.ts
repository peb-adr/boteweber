import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { InfoService } from './info.service';



@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoComponent
  ],
  providers: [
    InfoService
  ]
})
export class InfoModule { }
