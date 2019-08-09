import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'create-modal',
    templateUrl: './modal.html',
    styleUrls: ['./modal.css'],
  })
  export class modal {

    type:string ;
    text:string;
    title:string;
    likes:number;

    panelOpenState = false;

      
  
    constructor(
      public dialogRef: MatDialogRef<modal>,
      @Inject(MAT_DIALOG_DATA) public data: string) {
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    submit(): void{
      console.log(this.type,this.text,this.title);


    }
  
  
    
  }