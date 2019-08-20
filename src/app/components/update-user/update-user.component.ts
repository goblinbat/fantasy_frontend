import { Component, OnInit, TemplateRef, ViewChild, Input, NgZone } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  @Input()
  responses: Array<any>;

  public uploader: FileUploader;
  private hasDropOverZone: boolean = false;

  @ViewChild('deleteModall', {static: true}) templateRef: TemplateRef<any>;

  dialogRef
  userName: string
  userId
  // currentUser
  bio: string
  pic: any
  // update = {
  //   username: '',
  //   desc: ''
  // }

  constructor(
    private user: UserService, 
    private router: Router,
    private dialog: MatDialog, 
    private auth: AuthService,
    private zone: NgZone,
    private cloudinary: Cloudinary) { 
      this.responses = [];
    }
  
  ngOnInit() {
    this.userName = localStorage.getItem('username');
    this.userId = localStorage.getItem('userId')
    this.user.getUser(this.userName).subscribe( (data:User) => {
      // this.currentUser = data
      // console.log(this.currentUser)
      this.bio = data.profile
      this.pic = data.profilePic
    })

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
          // console.log(this.responses);
          this.pic = this.responses;
          // console.log(this.pic);
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
    this.hasDropOverZone = e;
  }

  onSubmit() {
    let data
    if (this.pic) {
      data={ user: {
        username: this.userName,
        profile: this.bio,
        pic: this.pic
      }}
    } else {
      data={ user: {
        username: this.userName,
        profile: this.bio,
      }}
    }
    // console.log(data)
    localStorage.setItem('username', this.userName);
    this.user.editUser(this.userId, data).subscribe(res => {
      this.router.navigate(["/splash/profile"])
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }

  delete() {
    this.user.deleteUser(this.userId).subscribe(res=>{
      this.auth.logout()
    })
  }

  deleteModal() {
    this.dialogRef = this.dialog.open(this.templateRef, {
      width: '60%',
    });
  }

}
