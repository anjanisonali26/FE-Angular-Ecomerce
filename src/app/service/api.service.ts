import { Injectable } from '@angular/core';
import {Register} from '../Register';
import {HttpClient} from '@angular/common/Http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  private getRegisterList(response){
    return response.data
  }
  public getAPI(): Observable<Register[]>{
    return this.http.get<Register[]>('http://localhost:4000/customers').pipe(
      map(this.getRegisterList)
    )
  }
  
}

