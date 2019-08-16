import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class viewModal implements OnInit {
  width = window.innerWidth;

  logId
  postId
  data
  comments
  dataText

  newComment = ''

  story = false
  campaign = false
  creature = false

  editable = false
  which = 0
  editedCom = ""
  
  constructor (
    private route: ActivatedRoute, 
    private posst: PostService, 
    private commentService: CommentService,
    private _location: Location, 
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    if (localStorage.getItem('userId')) {
      this.logId = Number(localStorage.getItem('userId'))
    } else {
      this.logId = -1
    }
    this.postId = Number(this.route.snapshot.paramMap.get("id"))
    this.posst.getPost(this.postId).subscribe(res => {
      this.data = res; 
      // console.log(this.data)
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
      this.commentService.getCommentsOnPost(this.postId).subscribe(res => {
        this.comments = res
        this.comments = this.comments.reverse()
      });
      this.dataText = this.data.text.split('hiowrehgoihq4huigrbeiubuph3q49024t89hwgiwh');
    });
  };

  goBack() {
    this._location.back()
  }

  editPost(toEdit) {
    let dialogRef
    if (this.width > 460) {
      dialogRef = this.dialog.open(UpdateModalComponent, {
        width: '60%',
        data: toEdit
      });
    } else {
      dialogRef = this.dialog.open(UpdateModalComponent, {
        width: '95%',
        data: toEdit
      });
    }
  }

  makeComment() {
    // console.log(this.newComment)
    this.commentService.createComment(this.postId, this.newComment).subscribe(res => window.location.reload())
  }

  editComment(com) {
    this.which = com.id;
    this.editedCom = com.text;
    this.editable = true
  }

  updateCom(id, text) {
    // console.log(text)
    this.commentService.editComment(id, text).subscribe(res => {
      this.cancel()
      // console.log(res);
      window.location.reload();
    })
  }

  cancel() {
    this.which = 0;
    this.editable = false
  }

  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(res => window.location.reload())
  }

}
