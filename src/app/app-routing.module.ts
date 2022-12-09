import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { LoginpageComponent } from './layouts/loginpage/loginpage.component';
import { SignUpComponent } from './layouts/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './layouts/forgot-password/forgot-password.component';
import { AuthGuard } from './common/guard/auth.guard';
import { AdminGuard } from './common/guard/admin.guard';
import { AccountInfoComponent } from './layouts/account-info/account-info.component';
import { AdminPortalComponent } from './layouts/admin-portal/admin-portal.component';
import { CreatePostComponent } from './layouts/create-post/create-post.component';
import { EventPageComponent } from './layouts/event-page/event-page.component';
import { PostPageComponent } from './layouts/post-page/post-page.component';
import { PostComponent } from './layouts/post/post.component';
import { MessagesComponent } from './layouts/messages/messages.component';
import { CreateEventComponent } from './layouts/create-event/create-event.component';
import { AuthService } from './common/services/auth.service';

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
    path: 'admin',
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
  },
  {
    path: 'admin/create-event',
    component: CreateEventComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
