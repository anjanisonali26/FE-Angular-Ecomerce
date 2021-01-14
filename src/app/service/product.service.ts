import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/Http';
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getproduct(): Observable<any>{
    return this.http.get('http://localhost:2000/product/getall').pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    )
  }
}

