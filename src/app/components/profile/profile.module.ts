import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxPaginationModule
  ]
})
export class ProfileModule { }
