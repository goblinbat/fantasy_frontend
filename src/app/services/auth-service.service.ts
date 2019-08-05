import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

const baseUrl = 'http://localhost:3000'

// Note: these may or may not work, i'm presently unable to really test them
// I'm especially unsure about how we're dealing with the token...

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: Token;
  isLoggedIn = new BehaviorSubject<boolean>(false);
  user: string

  constructor(private _http: HttpClient, private _router: Router) { 
    if (localStorage.getItem('id_token')) {
      this.isLoggedIn.next(true);
    }
  }

  register(regUser) {
    let newUser = {
      user: {
        userName: regUser.userName,
        password: regUser.password
      }
    } 
    return this._http.post(`${baseUrl}/auth/signup`, newUser).subscribe( (token:any) => {
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
    });
  }

  login(loginInfo) {
    let data = { 
      user: {
        userName: loginInfo.userName,
        password: loginInfo.password
      }
    };
    return this._http.post(`${baseUrl}/auth/login`, data).subscribe( (token:any) => {
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
      // this._router.navigate(['/']);
    });
  }

  currentUser(): Observable<Object> {
    let tokin;
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); } else {
      tokin = localStorage.getItem('id_token')
    }

    return this._http.get(`${baseUrl}/user/${tokin.userName}`, { headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false); 
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }
}
