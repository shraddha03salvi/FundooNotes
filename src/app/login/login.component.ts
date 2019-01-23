import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { HttpService } from '../http.service';
/* component is a basically a class which is defined to be visible in 
any elements in the screen or browsers*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /*constructor for initialization for http services*/
  constructor(private router: Router, private httpService: HttpService) { }
  model={};
  hide = true;
 //password= "";
  /*The ngOnInit method runs after the constructor method, meaning that all of the injected dependencies 
  will be resolved and all of the class members will be defined. 
  */
  ngOnInit() {
  }
  
  email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
  password = new FormControl('', [Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]);
  
  

  getErrorMessage() {
  return this.email.hasError('required') ? 'email is required' :
  this.email.hasError('pattern') ? 'Not a valid email' :
  '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'password is required' :
    this.password.hasError('pattern') ? 'Not a valid Password! Please follow the correct format' :
    '';
    }
  /*validate the login page*/
  login() {
  var requestBody ={
  "email":this.email.value,
  "password": this.password.value
  } 
  console.log(requestBody);
  this.httpService.postService('/user/login', requestBody).subscribe( data => {
  console.log(data);
  //alert("login successfully!")
  this.router.navigate(['dash-board'])
  }, err => {
  alert("not a registered")
  })
  }
  /*navigate to the registration page*/
  registration() {
  this.router.navigate(['registration']);
  }
  
  }
  

