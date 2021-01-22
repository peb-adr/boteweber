import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';

import { AdminInfoComponent } from './info/info.component';
import { AdminNewsComponent } from './news/news.component';
import { AdminSubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'info', component: AdminInfoComponent },
      { path: 'news', component: AdminNewsComponent },
      { path: 'subs', component: AdminSubscriptionsComponent }
    ]
  }
]
export const routingComponents = [AdminInfoComponent, AdminNewsComponent, AdminSubscriptionsComponent]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
