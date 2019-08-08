import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: true;
  username: string;
  password: string;
  newUser = {
    username: this.username,
    password: this.password
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login) {
      // console.log(this.newUser.username, this.newUser.password)
      this.auth.login(this.newUser.username, this.newUser.password)
      this.router.navigate(['splash/explore'])
    } else {
      // console.log(this.newUser.username, this.newUser.password)
      this.auth.register(this.newUser.username, this.newUser.password)
      this.router.navigate(['splash/explore'])
    }
  }

}
