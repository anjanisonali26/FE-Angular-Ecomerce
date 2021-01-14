import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductDetailService} from '../../../service/product-detail.service';
import {ProductDetail} from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: any;
  products : ProductDetail
  public productConnect: any = {} 
  router: any;


  constructor(private productdetailservice: ProductDetailService) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
      console.log(params);
      this.id = params
     
      
      this.productdetailservice.getproductdetail(this.id).subscribe((result)=>{
        this.products = result.data
      })
    })
  }

}
