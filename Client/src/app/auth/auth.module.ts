import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,

  ],
  exports:[
    

  ],
  imports: [
    CommonModule,
    AuthRoutingModule   
  ]
})
export class AuthModule { }
