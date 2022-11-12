import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './account-system/loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { SignUpComponent } from './account-system/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './account-system/forgot-password/forgot-password.component';
import { AuthService } from './account-system/shared/services/auth.service';
import { VerifyEmailComponent } from './account-system/verify-email/verify-email.component';
import { AccountInfoComponent } from './account-system/account-info/account-info.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EventContentsComponent } from './event-contents/event-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    TopnavbarComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AccountInfoComponent,
    AdminPortalComponent,
    CreatePostComponent,
    EventContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
