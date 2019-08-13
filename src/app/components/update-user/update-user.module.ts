import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { UpdateUserRoutingModule } from './update-user-routing.module';

import { UpdateUserComponent } from './update-user.component';


@NgModule({
  declarations: [UpdateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UpdateUserRoutingModule
  ]
})
export class UpdateUserModule { }
