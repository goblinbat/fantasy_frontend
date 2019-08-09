import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:3000'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public get loggedIn(): boolean{
		return localStorage.getItem('access_token') !==  null;
	}

	constructor(private httpClient: HttpClient, private router: Router) { }

	login(username:string, password:string) {
		const data = {
			user: {
				username: username,
				password: password
			}
		}
		return this.httpClient.post<{sessionToken: string, user:User}>(`${baseUrl}/auth/login`, data).subscribe(res => {
			localStorage.setItem('access_token', res.sessionToken);
			console.log(res.user)
			localStorage.setItem('username', res.user.username); // just ignore the red squiggle, this works
			localStorage.setItem('userId', res.user.id);		// same, just ignore red squiggle
			this.router.navigate(['/splash/explore']).then(res => window.location.reload())
		})
	}	

	register(username:string, password:string) {
		const data = {
			user: {
				username: username,
				password: password
			}
		}
		return this.httpClient.post(`${baseUrl}/auth/signup`, data).subscribe(res => {
			this.login(username, password)
		})
	}

	logout() {
		localStorage.clear();
		// window.location.reload();
		this.router.navigate(['/splash/explore']).then(res => window.location.reload())
  	}
}
