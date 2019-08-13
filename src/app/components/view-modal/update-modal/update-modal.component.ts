import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Location} from '@angular/common';
import { PostService } from 'src/app/services/post.service';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from '../../navs/side-bar/modals/modal';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  panelOpenState = false;
  hold

  constructor(
    private posst: PostService,
    private _location: Location,
    private dialogRef: MatDialogRef<UpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {}

    updatedPost={
      text: '',
      title: '',
      tags: [],
      iName: '',
      iCat: '',
      iRange: '',
      iThrow: '',
      iProperties: '',
      iAlign: '',
      iScores: '',
      iVuln: '',
      iResist: '',
      iImmune: '',
      iLang: '',
      iAction: '',
      iCR: 0
    }

  onNoClick(): void {
    this.fixText()
    this.dialogRef.close();
  }

  saveTags(value:any):void{
    this.updatedPost.tags.push(value);
  }

  delete() {
    this.posst.deletePost(this.data.id).subscribe(res => this._location.back());
    this.dialogRef.close();
  }

  fixText() {
    if (this.updatedPost.text !== this.hold) {
      let editedText = this.updatedPost.text.substring(3,this.updatedPost.text.length-4)
      this.updatedPost.text = editedText.trim();
    } else {
      this.data.text = this.data.text.trim();
    }
  }

  updatePost() {
    this.fixText();
    this.posst.updatePost(this.data.id, this.updatedPost).subscribe(res => console.log(res))
    location.reload();
  }

  ngOnInit() { 
    this.updatedPost = this.data
    this.hold = this.data.text
    // console.log(this.updatedPost)
  }

}
