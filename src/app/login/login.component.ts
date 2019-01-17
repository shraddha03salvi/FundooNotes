import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { HttpService } from '../http.service';
// component is a basically a class which is defined to be visible in 
//any elements in the screen or browsers
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //constructor for initialization for http services
  constructor(private router: Router,private httpService: HttpService ) { }
  model={};
// initialized all data-bound properties of a directive
  ngOnInit() { 
  }
   //if login button pressed, login() is  method invoked
  Login() {
    console.log(this.model);
    this.httpService.postService('/user/login',this.model).subscribe( data => {
      console.log(data);
      this.router.navigate(['dash-board'])
    }, err => {
      alert("not a registered")
    })
  }
//for navigation from login page to registeration page
  registration() {
    this.router.navigate(['registration']);
  }
}

