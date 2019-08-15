import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {FormControl, FormBuilder,FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {modal} from './modals/modal';
import { MatSidenavContainer } from '@angular/material';

 
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @ViewChild(MatSidenavContainer, {static: false}) sidenavContainer: MatSidenavContainer;

  explore: true;
  profile: false;
  // viewPost = false;
  options: FormGroup;
  isLoggedIn: boolean;

  modalID:string;
  name:string = localStorage.getItem('username');
  userId:string = localStorage.getItem('userId');

  width = window.innerWidth;


  constructor(fb: FormBuilder,private auth : AuthService, private router: Router,public dialog: MatDialog) {
    this.options = fb.group({
      fixed: false,
      top: 0
    });
  }

  shouldRun = true;
  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn;
    // if (this.width <= 924) {
    //   this.sidenavContainer.close()
    // }
  }

  //modal for campaign, short stories, and creatures
  openDialog(input:string): void {
    this.modalID = input;
    const dialogRef = this.dialog.open(modal, {
      width: '60%',
      data:{
        id: this.modalID,
        name: this.name,
        userId: Number(this.userId),
      }
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logMeOut() {
    this.auth.logout();
    this.router.navigate(['/auth'])
    
  }

}








