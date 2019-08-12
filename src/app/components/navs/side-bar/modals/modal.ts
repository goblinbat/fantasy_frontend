import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PostService } from 'src/app/services/post.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
    selector: 'create-modal',
    templateUrl: './modal.html',
    styleUrls: ['./modal.css'],
  })
  export class modal {
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    matcher = new MyErrorStateMatcher();



    panelOpenState = false;

      
  
    constructor(
      public dialogRef: MatDialogRef<modal>,
      @Inject(MAT_DIALOG_DATA) public data: string,
      private postService: PostService) {
        
      }

      newPost={
        userId:0,
        userName:'',
        type:'',
        text:'',

        plot:'',
        characters:'',
        setting:'',
        themes:'',
        
        title:'',
        likes:0,
        tags:[]
      }
       counter:number = 0;
       
    saveTags(value:any):void{
     
      this.newPost.tags[this.counter] = value;
      this.counter++;


    }
        
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    submit(id,name,userId): void{
      this.newPost.type=id;
      this.newPost.userName=name;
      this.newPost.text += this.newPost.plot + this.newPost.characters +this.newPost.setting +this.newPost.themes;
      this.newPost.userId = userId;
      this.postService.createPost(this.newPost).subscribe(res =>console.log(res));
      console.log(this.newPost.type,this.newPost.text,this.newPost.title,this.newPost.tags);


    }
  
  
    
  }