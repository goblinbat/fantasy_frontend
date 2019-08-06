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
  options: FormGroup;

  constructor(private auth : AuthService, private router: Router, private fb: FormBuilder) { 
    this.options = fb.group({
      fixed: false,
      top: 0
    });
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn
    console.log(this.isLoggedIn)
  }

  shouldRun = true;

  logMeOut() {
    this.auth.logout();
    this.router.navigate(['explore'])
  }
}
