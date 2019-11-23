import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private bookSer: BookService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.getById();
  }

  getById() {
    const bookId = this.route.snapshot.params.id;
    return this.bookSer.getById(bookId).subscribe(res => {
      return this.formGroup.patchValue({
        title: res.title,
        author: res.author,
        description: res.description,
      });
    });
  }

  onSubmit() {
    const bookId = this.route.snapshot.params.id;
    const value = this.formGroup.value;
    return this.bookSer.updateBook(value, bookId).subscribe(res => {
      return this.router.navigate(['/home']);
    });
  }
}



