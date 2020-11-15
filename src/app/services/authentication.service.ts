import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user'
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

  
  
export class AuthenticationService {

private readonly currentUserString = 'currentUser';


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.currentUserString))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  register( email: String, password: String, confirmPassword: String) {
    return this.http.post<any>( `${environment.URL}/register`, {
      'email': email,
      'password': password,
      'confirmPassword': confirmPassword,
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.URL}/login`, { 'email': email, 'password': password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem(this.currentUserString, JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem(this.currentUserString);
    this.currentUserSubject.next(null);
  }
}
