import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'create-modal',
    templateUrl: './modal.html',
    styleUrls: ['./modal.css'],
  })
  export class modal {
  
    constructor(
      public dialogRef: MatDialogRef<modal>,
      @Inject(MAT_DIALOG_DATA) public data: modal) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  
  }