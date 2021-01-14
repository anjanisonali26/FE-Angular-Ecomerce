import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ProfileComponent} from './profile/profile.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductComponent } from './home/home/product/product.component';

const routes: Routes = [
 {path: 'shopping', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'profile/:_id', component: ProfileComponent},
  {path: 'product/:_id', component: ProductCategoryComponent},
  {path: 'product/detail/:id', component: ProductComponent},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'body',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
