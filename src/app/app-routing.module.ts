import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component'; 
import { SideBarComponent } from './components/navs/side-bar/side-bar.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'splash', component: SideBarComponent, children: [
      { 
        path: 'explore', loadChildren: () =>
          import ('./components/explore/explore.module').then(m => m.ExploreModule)
      },
      { 
        path: '**', redirectTo: 'explore',
      },
      {
        path: 'profile', loadChildren: () => 
          import ('./components/profile/profile.module').then(m => m.ProfileModule)
      }
    ] 
  },
  // { path: 'profile', component: ProfileComponent},
  { path: 'update', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 