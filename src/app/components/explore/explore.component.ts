import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { viewModal } from '../view-modal/view-modal.component';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  posts: any;
  
  constructor(private postService: PostService, public dialog: MatDialog) { }
  
  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts)
    })
  }

  
  showPost(clicked: Post) {
    console.log(clicked)
    const dialogRef = this.dialog.open(viewModal, {
      width: '60%',
      data:{
        data: clicked
      }});
  }
  
  ngOnInit() {
    this.getAllPosts();
  }
 
}
