import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Book[];
  constructor(private bookSer: BookService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.bookSer.getAll().subscribe(res => this.books = res);
  }

  delete(id: number) {
    const check = confirm('Bạn có chắc chắn muôn xóa không?');
    if (check === true) {
      return this.bookSer.deleteBook(id).subscribe(() => {
        return this.getAll();
      });
    }
  }
}
