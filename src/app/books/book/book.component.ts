import { Books } from '../../types/book';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Books = {} as Books;
  // for output(parent to child data)-4
  @Output() bookEmitter = new EventEmitter<Books>();

  constructor() { }

  ngOnInit(): void {

  }
  addToCart() {
    this.bookEmitter.emit(this.book);
    // console.log(this.book)
  }

}
