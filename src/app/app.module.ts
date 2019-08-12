import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatRippleModule } from '@angular/material'
import {MatExpansionModule} from '@angular/material/expansion';
import { ExploreModule } from './components/explore/explore.module';
import { ProfileModule } from './components/profile/profile.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { ExploreComponent } from './components/explore/explore.component';
import { SideBarComponent } from './components/navs/side-bar/side-bar.component';
import { TopBarComponent } from './components/navs/top-bar/top-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatDialogModule} from '@angular/material';
import {modal} from './components/navs/side-bar/modals/modal';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { viewModal } from './components/view-modal/view-modal.component';

const baseUrl = 'http://localhost:3000'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SideBarComponent,
    TopBarComponent,
    UpdateUserComponent,
    modal,
    viewModal,
   
  ],
  entryComponents:[
    modal,
    viewModal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: [baseUrl],
        blacklistedRoutes: [`${baseUrl}/auth`]
      }
    }),
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(), 
    MatCheckboxModule



  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatRippleModule,
    MatExpansionModule,
 

    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
