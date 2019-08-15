import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent }
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
export class AdminRoutingModule { }
