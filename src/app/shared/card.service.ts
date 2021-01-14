import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Card} from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public toggleCardSubject = new BehaviorSubject(false);
  public cardListSubject = new BehaviorSubject([]);

  constructor(http:HttpClient) { }


  toggleCard = () =>{
    this.toggleCardSubject.next(!this.toggleCardSubject.getValue())
}
addCard = (card:Card) =>{
    let data= this.cardListSubject.getValue();
    let arrData = data.find(c=>c.product.itemname === card.product.itemname);

    if(arrData) arrData.amount += card.amount;
    else data.push(card)
    this.cardListSubject.next(data)
    

    
  
   
}




}
