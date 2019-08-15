import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('searchValue',{static:true})searchValue:ElementRef;

  posts: any;
  searchVal:string;
  
  
  constructor(private postService: PostService, public dialog: MatDialog ) { }
  

  getAllPosts() {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
      
    console.log(this.posts)
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
  tempPost = [];
  
  searchPosts(){
    
    for(let i = 0;i<this.posts.length;i++){
      if(this.searchValue.nativeElement.value === this.posts[i].title){
        this.tempPost.push(this.posts[i]);
      }
    }
   
    this.posts = this.tempPost;
    this.tempPost = [];
    console.log(this.posts)
   


  }
 
  
  ngOnInit() {
    this.getAllPosts();
  }
 
}
