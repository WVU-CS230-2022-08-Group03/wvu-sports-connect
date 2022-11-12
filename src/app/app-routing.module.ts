import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './account-system/loginpage/loginpage.component';
import { SignUpComponent } from './account-system/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './account-system/forgot-password/forgot-password.component';
import { AuthGuard } from './account-system/shared/guard/auth.guard';
import { AdminGuard } from './account-system/shared/guard/admin.guard';
import { AccountInfoComponent } from './account-system/account-info/account-info.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { EventContentsComponent } from './event-contents/event-contents.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in', pathMatch: 'full'
  },
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
  {
    path: 'events',
    component: EventContentsComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'create-post',
    component: CreatePostComponent,  canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
