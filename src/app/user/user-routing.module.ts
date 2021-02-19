import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user.component';
import { UserFrontpageComponent } from './frontpage/frontpage.component';
import { UserSubscribeComponent } from './subscribe/subscribe.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserFrontpageComponent
      },
      {
        path: 'subscribe',
        component: UserSubscribeComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
