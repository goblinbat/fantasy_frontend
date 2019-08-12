import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { viewModal } from './view-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@NgModule({
  declarations: [viewModal],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class viewModule { }
