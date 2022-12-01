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
import { CreatePostComponent } from './create-post/create-post.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './post/post.component';
import { MessagesComponent } from './messages/messages/messages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomepageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    component: LoginpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'account-info',
    component: AccountInfoComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-portal',
    component: AdminPortalComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'events',
    component: EventPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'create-post',
    component: CreatePostComponent, 
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'post/:id',
    component: PostComponent,
    pathMatch: 'prefix',
    canActivate: [AuthGuard]
  },
  {
    path: 'messages',
    component: MessagesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
