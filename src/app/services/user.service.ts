import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    if (username === 'admin') {
      return this.http.get(`${baseUrl}/user/get/all`, {headers: this.setHeader()})
    } else {
      return this.http.get(`${baseUrl}/user/${username}`, {headers: this.setHeader()})
    }
  }

  editUser(id: number, newData:any) {
    return this.http.put(`${baseUrl}/user/${id}`, newData, {headers: this.setHeader()})
  }

  deleteUser(id: number) {
    return this.http.delete(`${baseUrl}/user/${id}`, {headers: this.setHeader()})
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', `${localStorage.getItem('access_token')}`);
  }

}
