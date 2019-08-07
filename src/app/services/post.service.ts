import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: 'http://localhost:3000/post'

  constructor(private http: HttpClient) { }

  // get all posts, regardless of user (use method in authcontroller)

  // get all of a user's posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }

  // get a single post
  getPost(id: number): Observable<Post[]> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Post[]>(url)
  }

  // create post


  // update post


  // delete post

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', `${localStorage.getItem('access_token')}`);
  }
}
