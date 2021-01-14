import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { register } from '../models/customer';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  datauser: Object ={}

  profileform = new FormGroup({
    _id: new FormControl(''),
    username: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    age:new FormControl(''),
    village:new FormControl(''),
    districts:new FormControl(''),
    province:new FormControl(''),
    country:new FormControl(''),
    phone:new FormControl(''),
    postal:new FormControl(''),
    role:new FormControl('')
    
  });


  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id =  this.route.snapshot.paramMap.get('_id');
    this.authService.getProfile(id).subscribe(res=>{
      this.datauser = res
      // console.log("Profile",res);
      this.profileform.setValue({
        
        _id: res.data._id,
        username: res.data.username,
        email:res.data.email,
        password:'',
        firstname:res.data.firstname,
        lastname:res.data.lastname,
        age:res.data.age,
        village:res.data.village,
        districts:res.data.districts,
        province:res.data.province,
        country:res.data.country,
        phone:res.data.phone,
        postal:res.data.postal,
        role:res.data.role,
      
      })
      
    })

  }

}

