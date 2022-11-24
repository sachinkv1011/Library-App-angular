import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const myRoute:Routes=[
  {
    path:"",
    component:IndexPageComponent
  },
  {
    path:"",
    component:RegistrationComponent
  },
  {
    path:"",
    component:UserLoginComponent
  },
  {
    path:"bookentry",
    component:BooksEntryComponent
  },
  {
    path:"viewall",
    component:ViewAllBooksComponent
  },
  {
    path:"search",
    component:SearchBookComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  },
  {
    path:"edit",
    component:EditBookComponent
  },
  {
    path:"issue",
    component:IssueBooksComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    RegistrationComponent,
    UserLoginComponent,
    BooksEntryComponent,
    ViewAllBooksComponent,
    SearchBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    IssueBooksComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
