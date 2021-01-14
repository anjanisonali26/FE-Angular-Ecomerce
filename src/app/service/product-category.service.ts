import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { ProductId } from '../models/product';

const routes = {
  url: ( ) => `http://localhost:2000/product/getall` , 
  urlId: (id:any) => `http://localhost:2000/product/category` ,
}

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }


  getproduct(): Observable<any>{
    return this.http.get(routes.url()).pipe(
      map((body: any)=>body),
      catchError((err)=>of(err))
    )
  }

  
  getproductId(id: any): Observable<ProductId>{
    return this.http.get(routes.urlId+id).pipe(
      map((body: any)=>body),
      catchError((err)=>of(err))
    )
  }

  
 
}
