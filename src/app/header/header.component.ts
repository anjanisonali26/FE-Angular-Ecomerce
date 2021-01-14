import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import { Category } from '../models/category';
import { CategoryService } from '../service/category.service';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category
  public total_card : number;
  card: any

  constructor( public authService: AuthService, private cardService: CardService, private categoryService: CategoryService ) { }

  ngOnInit(): void {

this.categoryService.getCategory().subscribe((values: any)=>{
  this.categories = values
  console.log('xxx', values)
})







    this.cardService.cardListSubject.subscribe(res =>{
      this.total_card = res.length
    })
  }

  toggleCartPopup = (event)=>{
    event.preventDefault()
    event.stopPropagation()
    this.card=this.cardService.toggleCard()
    console.log("data",this.card);
    

  }

  logout(){
 
    this.authService.logout()
    
  }

}
