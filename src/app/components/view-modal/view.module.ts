import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { viewModal } from './view-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { FormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [viewModal],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'redbadgepatbrimol', upload_preset: 'unsigned'}),
    NgxPaginationModule
  ]
})
export class viewModule { }
