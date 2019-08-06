import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
}
