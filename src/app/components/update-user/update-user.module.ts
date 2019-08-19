import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';

import { UpdateUserRoutingModule } from './update-user-routing.module';

import { UpdateUserComponent } from './update-user.component';


@NgModule({
  declarations: [UpdateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    UpdateUserRoutingModule
  ]
})
export class UpdateUserModule { }
