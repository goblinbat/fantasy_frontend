import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public get loggedIn(): boolean{
		return localStorage.getItem('access_token') !==  null;
	}

	constructor(private httpClient: HttpClient) { }

	login(username:string, password:string) {
		const data = {
		user: {
			username: username,
			password: password
		}
		}
		return this.httpClient.post<{access_token: string}>(`${baseUrl}/auth/login`, data).pipe(tap(res => {
		localStorage.setItem('access_token', res.access_token);
		}))
	}	

	register(username:string, password:string) {
		const data = {
			user: {
			username: username,
			password: password
			}
		}
		return this.httpClient.post<{access_token: string}>(`${baseUrl}/auth/signup`, data).pipe(tap(res => {
		this.login(username, password)
		}))
	}

	logout() {
		localStorage.removeItem('access_token');
  	}
}
