import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  // get all comments on post
  getCommentsOnPost(postId: number) {
    return this.http.get(`${baseUrl}/auth/post/${postId}`);
  }

  // get single comment
  getComment(id: number) {
    return this.http.get(`${baseUrl}/auth/${id}`);
  }

  // create comment
  createComment(postId: number, text: any) {
    console.log(text)
    return this.http.post(`${baseUrl}/comment/${postId}`, {text:text}, {headers: this.setHeader()})
  }

  // update comment
  editComment(id: number, text: any){
    return this.http.put(`${baseUrl}/comment/${id}`, {text:text}, {headers: this.setHeader()})
  }

  // delete comment
  deleteComment(id:number) {
    return this.http.delete(`${baseUrl}/comment/${id}`, {headers: this.setHeader()})
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', `${localStorage.getItem('access_token')}`);
  }
}
