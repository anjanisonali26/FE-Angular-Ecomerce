import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {ProductComponent} from './product/product.component';
import {BodyComponent} from '../home/body/body.component';



@NgModule({
  declarations: [BodyComponent, ProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
