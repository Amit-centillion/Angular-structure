import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Logincomponent } from './login.component'
import { LoginRoutingModule } from './login-routing.module';

const routes: Routes = [
  {
    path: 'auth/login',
    component: Logincomponent,
  },

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoginRoutingModule
  ]
})
export class LoginModule { }
