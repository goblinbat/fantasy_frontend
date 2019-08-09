import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Post } from 'src/app/models/post.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class viewModal implements OnInit {
  campaign = false
  story = false
  creature = false
  
  constructor(public dialogRef: MatDialogRef<viewModal>, private user: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }   // data is the post clicked on

  ngOnInit() {
    if (this.data.data.type === 'campaign') {
      this.campaign = true
      this.story = false
      this.creature = false
    } else if (this.data.data.type === 'story') {
      this.campaign = false
      this.story = true
      this.creature = false
    } else {
      this.campaign = false
      this.story = false
      this.creature = true
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editPost() {
    console.log('edit the post')
  }

}
