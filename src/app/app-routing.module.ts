import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'admin', component: AdminComponent}
]
export const routingComponents = [UserComponent, AdminComponent]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
