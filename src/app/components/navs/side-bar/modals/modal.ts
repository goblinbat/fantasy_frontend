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

    plot:string;
    characters:string;
    setting:string;
    themes:string;
    editedText: string;
    panelOpenState = false;
    
   
    constructor(
      public dialogRef: MatDialogRef<modal>,
      @Inject(MAT_DIALOG_DATA) public data: string,
      private postService: PostService) { }

      newPost={
        type:'',
        text:'',
        title:'',
        likes:0,
        // time:0,
        tags:[],
        likedBy:[],
        iName:'',
        iCat:'',
        iRange:'',
        iThrow:'',
        iProperties:'',
        iAlign:'',
        iScores:'',
        iVuln:'',
        iResist:'',
        iImmune:'',
        iLang:'',
        iAction:'',
        iCR:0
      }

      counter:number = 0;
       
     
    
    saveTags(value:any):void{
      this.newPost.tags[this.counter] = value;
      this.counter++;
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    fixText() {
      this.newPost.text = this.newPost.text.split('<p>').join('');
      this.newPost.text = this.newPost.text.split('</p>').join('hiowrehgoihq4huigrbeiubuph3q49024t89hwgiwh');
      this.newPost.text = this.newPost.text.split('&nbsp;').join(' ');
    }

    submit(id): void{
      this.newPost.type = id;
      // this.editedText = this.newPost.text.substring(3,this.newPost.text.length-4)
      // this.newPost.text = this.editedText;
      this.fixText()
      // this.newPost.text += this.plot + this.characters + this.setting + this.themes;
      // this.newPost.text += this.newPost.iName + this.newPost.iCat + this.newPost.iRange + this.newPost.iRange + this.newPost.iThrow + this.newPost.iProperties + this.newPost.iAlign + this.newPost.iScores + this.newPost.iVuln + this.newPost.iImmune + this.newPost.iCR;
     
      this.postService.createPost(this.newPost).subscribe(res =>console.log(res));
      
      location.reload()
    }
  
  
    
  }