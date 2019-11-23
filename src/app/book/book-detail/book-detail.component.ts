import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private bookSer: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getById();
  }

  getById() {
    const bookId = this.route.snapshot.params.id;
    return this.bookSer.getById(bookId).subscribe(res => this.book = res);
  }
}
