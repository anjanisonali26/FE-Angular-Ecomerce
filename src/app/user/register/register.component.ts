import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import {Register} from '../../Register';
import {ApiService} from '../../service/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form : any ;
  signupForm: FormGroup;


  registers$: Observable<Register[]>
  constructor(
    public fb : FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      username:[''],
      email:[''],
      password:[''],
      firstname:[''],
      lastname:[''],
      village:[''],
      districts:[''],
      province:[''],
      country:[''],
      phone:[''],
      postal:[''],
      role:['']
      
    })
   }
  // private apiserservice:ApiService

  ngOnInit(): void {
    // this.registers$ = this.apiserservice.getAPI();
  }

  signUp(){
    this.authService.signUp(this.signupForm.value);
  
    // if(this.form.role === undefined){
    //     this.form.role = 0
    //     this.authService.signUp(this.form)
    //     // console.log(this.form.role);
        
    // }
    
  }

}
