import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  // get all posts, regardless of user (use method in authcontroller)
  getAllPosts() {
    return this.http.get(`${this.baseUrl}/auth/all`)
  }

  // get all of a user's posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/post`, {headers: this.setHeader()})
  }

  // get a single post
  getPost(id: number): Observable<Post[]> {
    const url = `${this.baseUrl}/post/${id}`
    return this.http.get<Post[]>(url)
  }

  // create post
  createPost(newPost: any) {
    return this.http.post(`${this.baseUrl}/post`, newPost, {headers: this.setHeader()} )
  }

  // update post
  updatePost(id:number, editPost: any) {
    return this.http.put(`${this.baseUrl}/post/${id}`, editPost, {headers: this.setHeader()})
  }

  // delete post
  deletePost(id:number) {
    return this.http.delete(`${this.baseUrl}/post/${id}`, {headers: this.setHeader()})
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', `${localStorage.getItem('access_token')}`);
  }
}
