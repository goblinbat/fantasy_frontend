import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { baseUrl } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // get all posts, regardless of user (use method in authcontroller)
  getAllPosts() {
    return this.http.get(`${baseUrl}/auth/allPosts`)
  }

  // get all of a user's posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}/post`, {headers: this.setHeader()})
  }

  // get a single post
  getPost(id: number): Observable<Post[]> {
    const url = `${baseUrl}/auth/${id}`
    return this.http.get<Post[]>(url)
  }

  // create post
  createPost(newPost: any) {
    return this.http.post(`${baseUrl}/post`, newPost, {headers: this.setHeader()} )
  }

  // update post
  updatePost(id:number, editPost: any) {
    return this.http.put(`${baseUrl}/post/${id}`, editPost, {headers: this.setHeader()})
  }

  // delete post
  deletePost(id:number) {
    return this.http.delete(`${baseUrl}/post/${id}`, {headers: this.setHeader()})
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('authorization', `${localStorage.getItem('access_token')}`);
  }
}
