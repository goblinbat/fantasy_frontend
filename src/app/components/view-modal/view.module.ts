import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { viewModal } from './view-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [viewModal],
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule
  ]
})
export class viewModule { }
