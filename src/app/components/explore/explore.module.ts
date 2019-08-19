import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { viewModal } from '../view-modal/view-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatCardModule,
    NgxPaginationModule
  ]
})
export class ExploreModule { }
