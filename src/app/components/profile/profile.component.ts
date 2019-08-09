import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material';
import { viewModal } from '../view-modal/view-modal.component';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string
  currentUser: any
  bio: string
  posts = []

  constructor(private user: UserService, private postServe: PostService, public dialog: MatDialog) { }

  getPosts() {
    this.postServe.getPosts().subscribe(posts => {
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
    this.userName = localStorage.getItem('username');
    this.user.getUser(this.userName).subscribe( (data:User) => {
      this.currentUser = data
      // console.log(this.currentUser)
      this.bio = data.profile
    })
    this.getPosts()
  }

}
