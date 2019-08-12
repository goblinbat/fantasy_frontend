import { Component, OnInit, Inject } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class viewModal implements OnInit {
  postId
  data
  logId
  story = false
  campaign = false
  creature = false
  
  constructor (private route: ActivatedRoute, private posst: PostService, private _location: Location, private dialog: MatDialog) {}

  ngOnInit() {
    this.logId = Number(localStorage.getItem('userId'))
    this.postId = Number(this.route.snapshot.paramMap.get("id"))
    this.posst.getPost(this.postId).subscribe(res => {
      this.data = res; 
      console.log(this.data)
      if (this.data.type === 'campaign') {
        this.story = false;
        this.campaign = true;
        this.creature = false;
      } else if (this.data.type === 'story') {
        this.story = true;
        this.campaign = false;
        this.creature = false;
      } else {
        this.story = false;
        this.campaign = false;
        this.creature = true;
      };
      // console.log(this.data.userId, this.logId, this.postId)
    });
  };

  goBack() {
    this._location.back()
  }

  editPost(toEdit) {
    console.log(toEdit)
    const dialogRef = this.dialog.open(UpdateModalComponent, {
      width: '60%',
      data: toEdit
    });
  }

}
