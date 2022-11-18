import { Books } from './../types/book';
import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
// import { Books } from '../types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) { 

  }

  // name:string='Clean Code';
  // author:string='Robert C. Martin';
  // image:string='https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'

  books: Books[] = [];

// for output(parent to child data)-1
card: Books[] = [];

  isDisabled: boolean = false;

  handleClink() {
    alert("Bismillah Hirrah Manir Rahim");
    this.isDisabled = true;
  }
  userName: string = '';
  handleInput(event: any) {
    // alert("Bismillah inputs");
    this.userName = event.target.value;

  }

  isShowing: boolean = true;


  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  addToCart(book: Books){
    console.log(book);
  }

}
