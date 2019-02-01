import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { MatSnackBar } from '@angular/material';
/* component is a basically a class which is defined to be visible in 
any elements in the screen or browsers*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /*constructor for initialization for http services*/
  constructor(private router: Router, private httpService: HttpService, private snackBar: MatSnackBar) { }
  model = {};
  hide = true;
  //password= "";
  /*The ngOnInit method runs after the constructor method, meaning that all of the injected dependencies 
  will be resolved and all of the class members will be defined. 
  */
  ngOnInit() {
  }
  /*using validators validation of each filed in login  page */
  email = new FormControl('', [Validators.required,  Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@(yahoo|gmail|hotmail|redmail|next|Next|Next)\.com$')]);
  password = new FormControl('', [Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]);


  /*functions or method for error message to each field */
  getErrorMessage() {
    return this.email.hasError('required') ? 'email is required' :
      this.email.hasError('pattern') ? 'Not a valid email!number and letter is mandtory' :
        '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'password is required' :
      this.password.hasError('pattern') ? 'Not a valid Password!follow the format with minlength 8 & combination of uppercase,lowercase,special symbol & number' :
        '';
  }
  /*validate the login page*/
  login() {
    if (this.getErrorMessage() != "" || this.getErrorMessagePassword() != "") {
      this.snackBar.open("please fill the valid crediantial" , 'okay', { duration: 2000, })
      return false;
    }
    else {

      var requestBody = {
        "email": this.email.value,
        "password": this.password.value
      }
      console.log(requestBody);
      this.httpService.postService('/user/login', requestBody).subscribe(data => {
        console.log(data);
        // alert("login successfully!")
        // this.snackBar.open("login successfully!",'okay',{ duration: 2000,})
        this.router.navigate(['dash-board'])
      }, err => {
        this.snackBar.open("Login Failed! please register first!!", 'okay', { duration: 2000, })
        // alert("please fill the  valid crediantial");
      })
    }
  }
  /*navigate to the registration page*/
  registration() {
    this.router.navigate(['registration']);
  }

}


