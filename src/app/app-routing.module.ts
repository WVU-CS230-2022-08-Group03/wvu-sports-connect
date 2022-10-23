import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './AccountSystem/loginpage/loginpage.component';
import { SignUpComponent } from './AccountSystem/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './AccountSystem/forgot-password/forgot-password.component';

import { AuthGuard } from './AccountSystem/shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path:'homepage',
    component: HomepageComponent,  canActivate: [AuthGuard]
  },

  {
    path: 'sign-in',
    component: LoginpageComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
