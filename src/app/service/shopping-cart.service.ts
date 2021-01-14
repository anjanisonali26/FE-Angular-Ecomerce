import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';


const routes = {
  url: ( ) => `http://localhost:2000/product/getall` , 
  urlId: (id:any) => `http://localhost:2000/product/product/` +id,
}


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }


  getproduct(): Observable<any>{
    return this.http.get(routes.url()).pipe(
      map((body: any)=>body),
      catchError((err)=>of(err))
    )
  }


  getproductId(id: any): Observable<any>{
    return this.http.get(routes.urlId(id)).pipe(
      map((body: any)=>body),
      catchError((err)=>of(err))
    )
  }





}
