import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl: 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  // get all comments on post
  getCommentsOnPost(postId: number) {
    return this.http.get(`${this.baseUrl}/auth/post/${postId}`);
  }

  // get single comment
  getComment(id: number) {
    return this.http.get(`${this.baseUrl}/auth/${id}`);
  }

  // create comment
  createComment(postId: number, text: any) {
    return this.http.post(`${this.baseUrl}/comment/${postId}`, text, {headers: this.setHeader()})
  }

  // update comment
  editComment(id: number, text: any){
    return this.http.put(`${this.baseUrl}/comment/${id}`, text, {headers: this.setHeader()})
  }

  // delete comment
  deleteComment(id:number) {
    return this.http.delete(`${this.baseUrl}/comment/${id}`, {headers: this.setHeader()})
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', `${localStorage.getItem('access_token')}`);
  }
}
