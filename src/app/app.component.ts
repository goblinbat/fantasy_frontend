import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import {FormControl, FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fantasy-forum';

  isLoggedIn: boolean

  constructor(private auth : AuthService, private router: Router, private fb: FormBuilder) {  }

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn
  }

  logMeOut() {
    this.auth.logout();
    this.router.navigate(['auth'])
  }
}
