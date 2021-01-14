import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'product/detail/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
