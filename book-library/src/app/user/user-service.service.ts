import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  constructor(private http: HttpClient) { }

  register(username:string, email: string, password: string, repassword: string){
    this.http.post<User>("http:/localhost:3000/register",{username,email,password,repassword})
  }
}
