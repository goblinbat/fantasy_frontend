import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore.component';
import { viewModal } from '../view-modal/view-modal.component';
import { viewModule } from '../view-modal/view.module';

const routes: Routes = [
  { path: '', component: ExploreComponent},
  // {path: 'post', loadChildren: () => 
  // import ('../view-modal/view.module').then(m => m.viewModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
