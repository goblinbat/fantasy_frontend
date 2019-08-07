import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  posts: Post[];
  
  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts)
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }
 
}
