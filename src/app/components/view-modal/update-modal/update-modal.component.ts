import { Component, OnInit, Inject, Input, NgZone } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Location} from '@angular/common';
import { PostService } from 'src/app/services/post.service';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from '../../navs/side-bar/modals/modal';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
// import * as Cloudinarie from 'cloudinary-core';

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

  @Input()
  responses: Array<any>;

  private uploader: FileUploader;
  private hasBaseDropZoneOver: boolean = false;

  panelOpenState = false;
  hold

  constructor(
    private posst: PostService,
    private _location: Location,
    private dialogRef: MatDialogRef<UpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private cloudinary: Cloudinary,
    private zone: NgZone 
    ) { this.responses = [] }

    updatedPost={
      text: '',
      title: '',
      tags: [],
      image: [],
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
    this.data.text = this.data.text.split('<p>').join('');
    this.data.text = this.data.text.split('</p>').join('hiowrehgoihq4huigrbeiubuph3q49024t89hwgiwh');
    this.data.text = this.data.text.split('&nbsp;').join(' ');
    this.data.text = this.data.text.split('<br>').join('hiowrehgoihq4huigrbeiubuph3q49024t89hwgiwh');
  }

  updatePost() {
    this.fixText();
    this.posst.updatePost(this.data.id, this.updatedPost).subscribe(res => console.log(res))
    location.reload();
  }

  ngOnInit() { 
    this.updatedPost = this.data
    this.hold = this.data.text.split('hiowrehgoihq4huigrbeiubuph3q49024t89hwgiwh').join('<br>')
    // console.log(this.updatedPost)
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      autoUpload: true,
      isHTML5: true,
      removeAfterUpload: true,
      headers: [
      {
        name: 'X-Requested-With',
        value: 'XMLHttpRequest'
        } 

      ]
    };
  
    this.uploader = new FileUploader(uploaderOptions)

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      fileItem.withCredentials = false;
      form.append('file', fileItem);
      return { fileItem, form };
    }

    ;

    const upsertResponse = fileItem => {
      this.zone.run(() => {
        const existingId = this.responses.reduce((prev, current, index) => {
          if (current.file.name === fileItem.file.name && !current.status) {
            return index;
          }
          return prev;
        }, -1);
        if(existingId > -1) {
          this.responses[existingId] = Object.assign(this.responses[existingId], fileItem)
        } else {
          this.responses.push(fileItem.data.url);
          this.updatedPost.image = this.responses
          console.log(this.updatedPost.image);
        }
      });
    };

    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>
      upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }
        );
        
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
