import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userName: string
  userId
  // currentUser
  bio: string
  
  constructor(private user: UserService, private router: Router) { }
  
  ngOnInit() {
    this.userName = localStorage.getItem('username');
    this.userId = localStorage.getItem('userId')
    this.user.getUser(this.userName).subscribe( (data:User) => {
      // this.currentUser = data
      // console.log(this.currentUser)
      this.bio = data.profile
    })
  }

  onSubmit() {
    let data={ user: {
      username: this.userName,
      profile: this.bio
    }}
    console.log(data)
    localStorage.setItem('username', this.userName);
    this.user.editUser(this.userId, data).subscribe(res => {
      this.router.navigate(["/profile"])
    })
  }

  delete() {
    this.user.deleteUser(this.userId).subscribe(res=>{
      this.router.navigate(["profile"])
    })
  }

}
