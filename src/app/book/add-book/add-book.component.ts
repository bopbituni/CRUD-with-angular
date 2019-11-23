import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private bookSer: BookService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    const value = this.formGroup.value;
    return this.bookSer.addBook(value).subscribe(res => {
      return this.router.navigate(['/home']);
    });
  }
}
