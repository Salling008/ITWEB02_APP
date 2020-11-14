import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

    constructor(private httpClient: HttpClient) {}

  create (
    email: String, 
    password: String) 
    {
      return this.httpClient.post<any>('http://localhost:3000/register', {
        'email': email,
        'password': password,
      });
    }
}
