import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Product} from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    endpoint: string = "http://localhost:2000";

  constructor(
    private http: HttpClient
  ) { }

  private getproduct(response:any){
    return response
  }
  // private getImage(response:any){
  //   return response
  // }
public getProduk(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.endpoint}/product`).pipe(map(this.getproduct))
  }
// public getPhoto(_id:string):Observable<any>{
//   return this.http.get(`${this.endpoint}/product/photo/`+_id).pipe(map(this.getImage))
//   // return "https://eccomerce-api.herokuapp.com/product/photo/"+_id
// }
// public getPhoto(_id:string){
  // return this.http.get(`${this.endpoint}/product/photo/`+_id)
  // return "https://eccomerce-api.herokuapp.com/product/photo/"+_id
  // return this.http.get(`${this.endpoint}/product/photo/`+_id).pipe(map(this.getImage))
}


// }
