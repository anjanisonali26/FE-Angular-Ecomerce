import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductId } from '../models/product';
import { ProductCategoryService } from '../service/product-category.service';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  id: any;
  products : Observable<ProductId>
  public productConnect: any = {} 

  constructor(public productcategoryservice: ProductCategoryService, public router: ActivatedRoute) { }

  ngOnInit() {
// this.router.params.subscribe((params)=>{
//   this.id = params._categoryId
//   this.productcategoryservice.getproductId(this.id).subscribe((result)=>{
//     console.log('xxx', result);
    
//     this.products = result.data
//   })
// })
//   }


let id = this.router.snapshot.paramMap.get('_id')
console.log(id);

this.products = this.productcategoryservice.getproductId(id)



}
}
