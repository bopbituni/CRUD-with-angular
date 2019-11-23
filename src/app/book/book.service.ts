import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + 'books');
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + 'books/' + id);
  }

  addBook(value: Book[]) {
    return this.http.post(this.url + 'books', value);
  }

  updateBook(value: Book[], id: number): Observable<any> {
    return this.http.put(this.url + 'books/' + id, value);
  }

  deleteBook(id: number) {
    return this.http.delete(this.url + 'books/' + id);
  }
}
