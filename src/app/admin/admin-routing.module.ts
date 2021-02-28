import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from "./auth/auth.guard";
import { AdminInfoComponent } from './info/info.component';
import { AdminLoginComponent } from "./login/login.component";
import { AdminNewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminAuthGuard],
    component: AdminComponent,
    children: [
      { path: 'info', component: AdminInfoComponent },
      { path: 'news', component: AdminNewsComponent },
      {
        path: 'subs',
        loadChildren: () => import('./subs/subs.module')
          .then(m => m.SubsModule)
      }
    ]
  },
  {
    path: 'login',
    component: AdminLoginComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
