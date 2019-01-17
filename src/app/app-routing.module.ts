import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  //Routes tell the router which view to display when a user clicks a link
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'dash-board',
    component: DashBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
