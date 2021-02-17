import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSubsEditSubscribersComponent } from './edit-subscribers/edit-subscribers.component';
import { AdminSubsComponent } from './subs.component';
import { SubsRoutingModule } from './subs-routing.module';
import { AdminEditableSubscriberComponent } from './editable-subscriber/editable-subscriber.component';
import { EditModule } from 'src/app/edit/edit.module';


@NgModule({
  declarations: [
    AdminSubsComponent,
    AdminSubsEditSubscribersComponent,
    AdminEditableSubscriberComponent
  ],
  imports: [
    CommonModule, 
    SubsRoutingModule,
    EditModule
  ]
})
export class SubsModule { }
