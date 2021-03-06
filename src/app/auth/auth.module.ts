import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
/* Components */
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [    
    LoginComponent,
    RegisterComponent,
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent, 
    FormsModule
  ]
})
export class AuthModule { }
