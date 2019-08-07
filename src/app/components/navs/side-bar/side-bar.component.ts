import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder,FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  options: FormGroup;
  isLoggedIn: boolean;


  constructor(fb: FormBuilder,private auth : AuthService, private router: Router) {
    this.options = fb.group({
      fixed: false,
      top: 0
    });
  }

  shouldRun = true;
  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn
  }

  toggle(){

  }

  logMeOut() {
    this.auth.logout();
    this.router.navigate(['/auth'])
    
  }

}
