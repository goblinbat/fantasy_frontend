import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get(`${baseUrl}/user/${username}`, {headers: this.setHeader()})
  }

  getUserById (id: any){
    return this.http.get(`${baseUrl}/user/get/${id}`, {headers: this.setHeader()})
  }

  getAllUsers() {
    return this.http.get(`${baseUrl}/user/find/all`, {headers: this.setHeader()})
  }

  editUser(id: number, newData:any) {
    return this.http.put(`${baseUrl}/user/${id}`, newData, {headers: this.setHeader()})
  }

  deleteUser(id: number) {
    if (id === 1) {
      console.log('cannot delete admin')
      return this.http.get(`${baseUrl}/user/get/${id}`, {headers: this.setHeader()})
    } else {
      return this.http.delete(`${baseUrl}/user/${id}`, {headers: this.setHeader()})
    }
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', `${localStorage.getItem('access_token')}`);
  }

}
