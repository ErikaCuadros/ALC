import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';


const routes :Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  { 
  path: 'login',
  component: LoginComponent,
},
{
  path: 'login/register',
  component: RegisterComponent,
},
      
    ]
    


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule {

}
