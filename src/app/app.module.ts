import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './AccountSystem/loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { SignUpComponent } from './AccountSystem/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './AccountSystem/forgot-password/forgot-password.component';
import { AuthService } from './AccountSystem/shared/services/auth.service';
import { VerifyEmailComponent } from './AccountSystem/verify-email/verify-email.component';
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
    CreatePostComponent,
  
    EventContentsComponent,
      


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
