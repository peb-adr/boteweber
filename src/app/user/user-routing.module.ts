import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user.component';
import { UserFrontpageComponent } from './frontpage/frontpage.component';
import { UserSubscribeComponent } from './subscribe/subscribe.component';
import { UserPrivacyComponent } from './privacy/privacy.component';
import { UserContactComponent } from './contact/contact.component';


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
      },
      {
        path: 'contact',
        component: UserContactComponent
      },
      {
        path: 'privacy',
        component: UserPrivacyComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
