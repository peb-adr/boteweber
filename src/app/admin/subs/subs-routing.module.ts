import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AdminSubsEditGroupsComponent } from './edit-groups/edit-groups.component';
import { AdminSubsEditSubscribersComponent } from './edit-subscribers/edit-subscribers.component';
import { AdminSubsComponent } from './subs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSubsComponent,
    children: [
      { path: 'subscribers', component: AdminSubsEditSubscribersComponent },
      { path: 'groups', component: AdminSubsEditGroupsComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsRoutingModule { }
