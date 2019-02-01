import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { from } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/;
  firstnamepattern = /^[_A-z]*((-|\s)*[_A-z])*$/;
  lastnamepattern = /^[_A-z]*((-|\s)*[_A-z])*$/;
  //constructor for initialization for http services
  constructor(private router: Router, private httpService: HttpService, private snackBar: MatSnackBar) { }
  hide = true;
  // password = "";
  // confirmPassword="";

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
  /*using validators validation of each filed in registration page */
  firstName = new FormControl('', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]);
  lastName = new FormControl('', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]);
  email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@(yahoo|gmail|hotmail|redmail|next|Next|Next)\.com$')]);
  password = new FormControl('', [Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,10}$')]);
  confirmPassword = new FormControl('', [Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,10}$')]);

  /*functions or method for error message to each field */
  getErrorFirst() {
    return this.firstName.hasError('required') ? 'You must enter a value' :
      this.firstName.hasError('pattern') ? 'Enter a valid firstname' :
        '';
  }
  getErrorLast() {
    return this.lastName.hasError('required') ? 'You must enter a value' :
      this.firstName.hasError('pattern') ? 'Enter a valid lastname' :
        '';
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('pattern') ? 'Not a valid email!enter number and letter' :
        '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Password is Required' :
      this.password.hasError('pattern') ? 'Not a valid Password!follow the format with minlength 8 & combination of uppercase,lowercase,special symbol & number' :
        '';
  }
  getErrorMessageConfirmPassword() {
    return this.confirmPassword.hasError('required') ? 'Password is Required' :
      this.confirmPassword.hasError('pattern') ? 'Not a valid Password! Please follow the correct format' :
        '';
  }
  /*if Registration button pressed, registration() method invoked*/
  registration() {
    if (this.model.firstName && this.model.lastName && this.model.email &&
      this.passwordPattern.test(this.password.value) && this.firstnamepattern.test(this.firstName.value) && this.lastnamepattern.test(this.lastName.value)) {
      if (this.model.password != this.model.confirmPassword) {
        //this.router.navigate(['registration']);
        //alert("fill all the field properly");
        //alert(" password is mismatch");
        this.snackBar.open("password is mismatch", 'okay', { duration: 2000, });
        return false;
      }
      var requestBody = {
        "firstName": this.firstName.value,
        "lastName": this.lastName.value,
        "email": this.email.value,
        "password": this.password.value,
        " confirmPassword": this.confirmPassword.value

      }
      console.log(requestBody);
      this.httpService.postService('/user/userSignUp', this.model).subscribe(data => {
        console.log(data);
        this.snackBar.open("Registration is done in FundooNotes",'okay',{duration:2000})
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        this.snackBar.open("Registration Failed", 'okay', { duration: 2000, })

        //this.router.navigate(['']);
      })

    }
    else {
      this.snackBar.open("please fill form & follow the proper format", 'okay', { duration: 2000, })
      // this.router.navigate(['registration']);
    }
  }
  /*navigate to the login page*/
  cancel() {
    this.router.navigate(['']);
  }
}

