import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';


const routes: Routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    MatFormFieldModule,
  ]
})
export class ProfileRoutingModule { }
