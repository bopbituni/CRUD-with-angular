import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBooksComponent} from './book/list-books/list-books.component';
import {AddBookComponent} from './book/add-book/add-book.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';


const routes: Routes = [
  {path: 'home', component: ListBooksComponent},
  {path: 'add', component: AddBookComponent},
  {path: 'edit/:id', component: EditBookComponent},
  {path: 'show/:id', component: BookDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
