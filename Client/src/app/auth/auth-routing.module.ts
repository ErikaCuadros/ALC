import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';


const routes :Routes = [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'login/register',
        component: RegisterComponent,
      },
      {
        path: 'pages/dashboard',
        component: PagesComponent,
      },
    ]
    


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AuthRoutingModule {

}
