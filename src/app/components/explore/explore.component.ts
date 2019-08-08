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
<<<<<<< HEAD
    this.getPosts(); 
=======
    this.getAllPosts();
>>>>>>> 5775a96a28732bccc9cd177f0475d9b63e450d89
  }
 
}
