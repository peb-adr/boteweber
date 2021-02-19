import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { UserSubscribeComponent } from "./user/subscribe/subscribe.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
]
export const routingComponents = [UserComponent, AdminComponent]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
