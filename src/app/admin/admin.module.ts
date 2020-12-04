import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarAdminComponent } from "./topbar/topbar.component";
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    TopbarAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
