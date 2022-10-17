import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
