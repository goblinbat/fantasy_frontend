import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string
  currentUser
  bio: string

  constructor(private user: UserService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('username');
    this.user.getUser(this.userName).subscribe( (data:User) => {
      this.currentUser = data
      // console.log(this.currentUser)
      this.bio = data.profile
    })
    // fetch posts
  }

}