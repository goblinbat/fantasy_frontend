import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { ExploreComponent} from './components/explore/explore.component'; 

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 