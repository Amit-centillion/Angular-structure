import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Logincomponent } from './login.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: 'auth/login',
      component: Logincomponent,
      data: { returnUrl: window.location.pathname },
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
