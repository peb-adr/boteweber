import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';

import { InfoAdminComponent } from './info/info.component';
import { NewsAdminComponent } from './news/news.component';

const routes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'info', component: InfoAdminComponent },
      { path: 'news', component: NewsAdminComponent }
    ]
  }
]
export const routingComponents = [InfoAdminComponent, NewsAdminComponent]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
