import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UpdateUserComponent } from './update-user.component';


const routes: Routes = [
  { path: '', component: UpdateUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [RouterModule]
})
export class UpdateUserRoutingModule { }
