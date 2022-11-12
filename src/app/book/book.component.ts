import { Books } from './../types/book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Books = {} as Books;

  constructor() { }

  ngOnInit(): void {
  }

}
