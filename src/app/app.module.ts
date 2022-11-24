import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    RegistrationComponent,
    UserLoginComponent,
    BooksEntryComponent,
    ViewAllBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
