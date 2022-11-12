import { Component, OnInit } from '@angular/core';

interface Books {
  name: string
  author: string;
  image: string;
  amount:number;
}

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
      author: 'Robert C. Martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:2000,

    },
    {
      name: 'Clean Code',
      author: 'Robert C. Martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount:3000

    },


  ]

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

}
