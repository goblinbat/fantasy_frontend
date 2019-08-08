import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn: boolean

  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn
    console.log(this.isLoggedIn)
  }

  logMeOut() {
    this.auth.logout();
    this.router.navigate(['splash/explore'])
  }

}
