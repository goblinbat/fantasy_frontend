import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Location} from '@angular/common';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  constructor(
    private posst: PostService,
    private _location: Location,
    private dialogRef: MatDialogRef<UpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.posst.deletePost(this.data.id).subscribe(res => this._location.back());
    this.dialogRef.close();
  }

  updatePost() {
    console.log('updating!')
  }

  ngOnInit() { }

}
