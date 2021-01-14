import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/Http';
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

const routes = {
  urlId: (id:any) => `http://localhost:2000/product/product/` + id,
}

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }


  getproductdetail(id: any): Observable<any>{
    return this.http.get(routes.urlId(id)).pipe(
      map((body: any)=>body),
      catchError((err)=>of(err))
    )
  }


}
