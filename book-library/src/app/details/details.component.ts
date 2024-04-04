import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../types/Book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  book:Book[]=[]
  constructor(private api: ApiService,private route: ActivatedRoute){}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get(`bookId`) as string
   
     this.api.getSingleBook(bookId).subscribe((bookInfo)=>{
       this.book = bookInfo
       console.log(this.book)
    })
  }
}
