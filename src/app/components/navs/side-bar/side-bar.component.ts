import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormBuilder,FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {modal} from './modals/modal';

 
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  explore: true;
  profile: false;
  options: FormGroup;
  isLoggedIn: boolean;

  modalID:string;
  name:string = localStorage.getItem('username');


  constructor(fb: FormBuilder,private auth : AuthService, private router: Router,public dialog: MatDialog) {
    this.options = fb.group({
      fixed: false,
      top: 0
    });
  }

  shouldRun = true;
  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn
  }

  //modal for campaign, short stories, and creatures
  openDialog(input:string): void {
    this.modalID = input;
    const dialogRef = this.dialog.open(modal, {
      width: '60%',
      data:{
        id: this.modalID,
        name: this.name
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








