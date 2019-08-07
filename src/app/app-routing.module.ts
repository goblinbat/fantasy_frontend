import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { ExploreComponent} from './components/explore/explore.component'; 
import { ProfileComponent } from './components/profile/profile.component';
import { SideBarComponent } from './components/navs/side-bar/side-bar.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'explore', component: SideBarComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'update', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 