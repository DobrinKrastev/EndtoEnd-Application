import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from './types/Book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBooks(){
     const apiUrl = 'http://localhost:3000';

     return this.http.get<Book[]>(`${apiUrl}/dashboard`);
  }

  getSingleBook(bookId:string){
    const apiUrl = 'http://localhost:3000';
    return this.http.get<Book[]>(`${apiUrl}/dashboard/details/${bookId}`)
  }

}
