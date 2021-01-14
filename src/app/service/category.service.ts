import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import {Category} from '../models/category';


const routes = {
  url: ( ) => `http://localhost:2000/category/getcategories/get` , 
  urlId: (id:any) => `http://localhost:2000/category/getcategory` +id,
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategoryId(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  private namecategory (response){
    return response.data
  }
  getCategory(): Observable<any>{
    return this.httpClient.get(routes.url())
    .pipe(map(this.namecategory),
    catchError((err)=> of(err))
    );
  }




}
