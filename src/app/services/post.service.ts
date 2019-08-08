import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: 'http://localhost:3000/post'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl+'/all')
  }

  getPost(id: number): Observable<Post[]> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Post[]>(url)
  }
}
