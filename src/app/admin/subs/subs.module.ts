import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSubsEditSubscribersComponent } from './edit-subscribers/edit-subscribers.component';
import { AdminSubsComponent } from './subs.component';
import { SubsRoutingModule } from './subs-routing.module';
import { AdminPropeditorSubscriberComponent } from './propeditor-subscriber/propeditor-subscriber.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminSubsEditGroupsComponent } from './edit-groups/edit-groups.component';
import { AdminPropeditorGroupComponent } from './propeditor-group/propeditor-group.component';


@NgModule({
  declarations: [
    AdminSubsComponent,
    AdminSubsEditSubscribersComponent,
    AdminPropeditorSubscriberComponent,
    AdminSubsEditGroupsComponent,
    AdminPropeditorGroupComponent
  ],
  imports: [
    CommonModule, 
    SubsRoutingModule,
    SharedModule
  ]
})
export class SubsModule { }
