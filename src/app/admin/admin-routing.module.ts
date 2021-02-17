import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';

import { AdminInfoComponent } from './info/info.component';
import { AdminNewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
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
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
