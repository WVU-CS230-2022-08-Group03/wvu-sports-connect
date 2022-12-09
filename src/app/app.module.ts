// modules
// * angular
// ** standard
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// ** imports
import { HttpClientModule } from '@angular/common/http';
// ** firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// config
import { environment } from 'src/environments/environment';

// common
// * services
import { AuthService } from './common/services/auth.service';
// * components
import { TopnavbarComponent } from './common/components/topnavbar/topnavbar.component';

// layouts
import { AppComponent } from './app.component';
import { LoginpageComponent } from './layouts/loginpage/loginpage.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { SignUpComponent } from './layouts/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './layouts/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './layouts/verify-email/verify-email.component';
import { AccountInfoComponent } from './layouts/account-info/account-info.component';
import { AdminPortalComponent } from './layouts/admin-portal/admin-portal.component';
import { CreatePostComponent } from './layouts/create-post/create-post.component';
import { EventBackendComponent } from './event-backend/event-backend.component';
import { EventPageComponent } from './layouts/event-page/event-page.component';
import { PostComponent } from './layouts/post/post.component';
import { PostPageComponent } from './layouts/post-page/post-page.component';
import { MessagesComponent } from './layouts/messages/messages.component';
import { CreateEventComponent } from './layouts/create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { PostBackendComponent } from './post-backend/post-backend.component';
import { MessageBackendComponent } from './message-backend/message-backend.component';

// subcomponents
// * post-page
import { PostPreviewComponent } from './layouts/post-page/post-preview/post-preview.component';


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
    CreateEventComponent,
    MessagesComponent,
    PostBackendComponent,
    MessageBackendComponent
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
