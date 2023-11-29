import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ViewToDoListPageComponent } from './pages/view-to-do-list-page/view-to-do-list-page.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SearchComponent } from './ui/search/search.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ToDoListCardsComponent } from './ui/to-do-list-card/to-do-list-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    LandingPageComponent,
    ViewToDoListPageComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    ToDoListCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
