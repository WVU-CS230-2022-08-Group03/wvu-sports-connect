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
import { HttpClientModule  } from '@angular/common/http';
import { EventBackendComponent } from './event-backend/event-backend.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PostComponent } from './post/post.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostPreviewComponent } from './post-page/post-preview/post-preview.component';
import { MessagesComponent } from './messages/messages/messages.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { EventAddComponent } from './event-add/event-add.component';
import { FormsModule } from '@angular/forms';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { PostBackendComponent } from './post-backend/post-backend.component';
import { MessageBackendComponent } from './message-backend/message-backend.component';


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
    EventBackendComponent,
    EventPageComponent,
    PostComponent,
    PostPageComponent,
    PostPreviewComponent,
    EventAddComponent,
    MessagesComponent,
    PostBackendComponent,
    MessageBackendComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
