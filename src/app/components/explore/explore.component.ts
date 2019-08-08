import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  posts: any;
  
  constructor(private postService: PostService) { }
  
  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts)
    })
  }
  
  ngOnInit() {
    this.getAllPosts();
  }
 
}
