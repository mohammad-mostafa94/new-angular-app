import { Component, OnInit } from '@angular/core';
import { Books } from '../types/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // name:string='Clean Code';
  // author:string='Robert C. Martin';
  // image:string='https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'

  books: Books[] = [
    {
      name: 'Clean Code',
      author: ' C. Martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:2000,

    },
    {
      name: 'Algorithm ',
      author: 'Robert',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:100

    },
    {
      name: 'First Thinking',
      author: 'Martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:300

    },
    {
      name: 'Second Thinking',
      author: 'Robert',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:500

    },
]

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

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(book: Books){
    console.log(book);
  }

}
