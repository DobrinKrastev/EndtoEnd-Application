import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 private user$$ = new BehaviorSubject<User | undefined>(undefined);
 private user$ = this.user$$.asObservable();

 
  user: User | undefined;
  USER_KEY = 'SECRETKEY'; // Ensure this matches the secret key used in the server-side code

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }
 
  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
   }
      
      
  
   register(username: string, email: string, password: string,repassword: string) {
    const apiUrl = 'http://localhost:3000'; 
    return this.http.post<User>(`${apiUrl}/register`, { username, email, password,repassword })
      .pipe(
        tap((user: User) => this.user$$.next(user))
      );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

