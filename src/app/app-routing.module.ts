import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChildViewChildrenComponent } from './view-child-view-children/view-child-view-children.component';
const routes: Routes = [
  {path:'',component:ViewChildViewChildrenComponent },
  {path:'view_child',component:ViewChildViewChildrenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
