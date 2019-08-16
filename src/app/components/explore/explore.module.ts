import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { viewModal } from '../view-modal/view-modal.component';


@NgModule({
  declarations: [ExploreComponent, JwPaginationComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatCardModule
  ]
})
export class ExploreModule { }
