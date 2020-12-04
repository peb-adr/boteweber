import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarAdminComponent } from "./topbar/topbar.component";
import { AdminComponent } from './admin.component';
import { AdminRoutingModule, routingComponents } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    TopbarAdminComponent,
    routingComponents
  ],
  imports: [
    AdminRoutingModule,
    CommonModule
  ]
})
export class AdminModule { }
