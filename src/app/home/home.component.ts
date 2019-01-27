import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Category {
  value: string;
  viewValue: string;
}

export interface Book {
  name: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  newTitle = new FormControl('', []);
  newCategory = new FormControl('', [Validators.required]);
  newDescription = new FormControl('', [Validators.required]);

  bookCount = 0;

  categories: Category[] = [
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Sport', viewValue: 'Sport'}
  ];

  books: Book[] = [
    /* {
      name: 'Dramula',
      category: 'Drama',
      description: 'So dramatic..',
    } */
  ];

  constructor() { }

  ngOnInit() { }

  add() {
    console.log('Adding neew book...', this.newTitle.value);

    if (this.newTitle.value === '' || this.newCategory.value === '' || this.newDescription.value === '') {
      return;
    }

    this.books.push({
      name: this.newTitle.value,
      category: this.newCategory.value,
      description: this.newDescription.value,
    });
    this.bookCount++;

    this.newTitle.setValue('');
    this.newCategory.setValue('');
    this.newDescription.setValue('');

    this.newTitle.markAsUntouched();
    this.newCategory.markAsUntouched();
    this.newDescription.markAsUntouched();
  }

  del(book: Book) {
    console.log('Deleting book...', book.name);

    this.books = this.books.filter((b: Book) => b.name !== book.name);
    this.bookCount = this.books.length;
  }
}
