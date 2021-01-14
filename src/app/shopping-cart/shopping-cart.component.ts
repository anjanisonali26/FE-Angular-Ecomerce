import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductCard} from '../models/product';
import { Observable } from 'rxjs';
import {CardService} from '../shared/card.service';
import {ProductService} from '../service/product.service';
import {ShoppingCartService} from '../service/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

id: any;
products : ProductCard
public productConnect: any = {}




  product$: Observable<Product[]>;

  constructor(private productService: ProductService, private cardService: CardService, public shoppingcartservice: ShoppingCartService, public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.product$ = this.productService.getproduct()
    console.log(this.product$);


    this.router.params.subscribe((params)=>{
      this.id = params._produckId
      this.shoppingcartservice.getproductId(this.id).subscribe((result)=>{
        console.log('xxx', result);
        
        this.products = result.data
      })
    })




  }

  addCard(product){
    this.cardService.addCard({
      product,
      amount:1
    })
   }


}
