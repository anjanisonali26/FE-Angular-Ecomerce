import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../models/product';
import { Observable } from 'rxjs';
import {CardService} from '../../../shared/card.service';
import { Card } from 'src/app/models/card';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  products:Product;
  product$: Observable<Product[]>;

  constructor(private productservice: ProductService,  private cardService: CardService) { }

  ngOnInit() {
    this.productservice.getproduct().subscribe((result)=>{
      // console.log('product', result)
      this.products = result.data
    })
  }


  addCard(product){
    this.cardService.addCard({
      product,
      amount:2
    })
   }

  
}
