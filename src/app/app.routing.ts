import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginModule} from '../app/pages/login/login.module'
import { Logincomponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  }, 
  {
    path: 'auth/login',
    component: Logincomponent,
  }, 
  {
    path:'auth/login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
 
  {
    path: '**',
    redirectTo: 'auth/login'
  }
]
