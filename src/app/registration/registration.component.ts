import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
//constructor for initialization for http services
  constructor(private router: Router,private httpService: HttpService) { }
  model = {
    "firstName": "",
    "lastName": "",
    "phoneNumber": "",
    "imageUrl": "",
    "role": "",
    "service": "basic",
    "createdDate": "2019-01-17T07:39:30.294Z",
    "modifiedDate": "2019-01-17T07:39:30.294Z",
    "addresses": [
    {}
    ],
    "realm": "",
    "username": "",
    "email": "",
    "emailVerified": true,
    "id": "string",
    "password": "",
    "confirmPassword": ""
    };
  ngOnInit() {
    
  }
  //if Registration button pressed, registration() method invoked
  registration() {
    if (this.model.password == this.model.confirmPassword) {
    this.httpService.postService('/user/userSignUp', this.model).subscribe(data => {
    console.log(data);
    this.router.navigate(['']);
    }, err => {
    console.log(err);
    this.router.navigate(['']);
    })
    } else {
    alert("confirm password mismatch")
    }
    
    }
   cancel(){
    this.router.navigate(['']);
   }
}
