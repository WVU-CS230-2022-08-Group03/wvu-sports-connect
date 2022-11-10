import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './AccountSystem/loginpage/loginpage.component';
import { SignUpComponent } from './AccountSystem/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './AccountSystem/forgot-password/forgot-password.component';

import { AuthGuard } from './AccountSystem/shared/guard/auth.guard';
import { AdminGuard } from './AccountSystem/shared/guard/admin.guard';
import { AccountInfoComponent } from './AccountSystem/account-info/account-info.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

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
  {
    path: 'account-info',
    component: AccountInfoComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'admin-portal',
    component: AdminPortalComponent,  canActivate: [AdminGuard]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
