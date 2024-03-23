import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[] =[];
 constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getBooks().subscribe((books)=>{
      console.log(books)
      this.books = books
    })
  }
}
