import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule} from '@angular/material';
import{ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';


//An NgModule is a class marked by the @NgModule decorator and shows to compile a component's template
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
 MatIconModule,MatInputModule,ReactiveFormsModule,MatCardModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
