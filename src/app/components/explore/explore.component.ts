import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { viewModal } from '../view-modal/view-modal.component';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  @ViewChild('searchValue',{static:true})searchValue:ElementRef;

  posts: any;
  searchVal:string;
  tempPost = [];
  width = window.innerWidth;
  break1: boolean
  
  constructor(private postService: PostService, public dialog: MatDialog ) { }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    })
  }

  showPost(clicked: Post) {
    // console.log(clicked)
    const dialogRef = this.dialog.open(viewModal, {
      width: '60%',
      data:{
        data: clicked
      }});
  }
  
  searchPosts(){
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post
      
      for(let i = 0; i < this.posts.length; i++){
        if(this.searchValue.nativeElement.value === this.posts[i].title){
          this.tempPost.push(this.posts[i]);
        } else if (this.searchValue.nativeElement.value === this.posts[i].userName) {
          this.tempPost.push(this.posts[i])
        }
      }
     
      this.posts = this.tempPost;
      this.tempPost = [];
    })
  }
 
  
  ngOnInit() {
    if (this.width <= 531) {
      this.break1 = true
    }
    this.getAllPosts();
  }
 
}
