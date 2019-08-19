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
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatRippleModule } from '@angular/material'
import {MatExpansionModule} from '@angular/material/expansion';
import { ExploreModule } from './components/explore/explore.module';
import { ProfileModule } from './components/profile/profile.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FileSelectDirective } from 'ng2-file-upload';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { ExploreComponent } from './components/explore/explore.component';
import { SideBarComponent } from './components/navs/side-bar/side-bar.component';
import { TopBarComponent } from './components/navs/top-bar/top-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatDialogModule } from '@angular/material';
import { modal } from './components/navs/side-bar/modals/modal';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { viewModal } from './components/view-modal/view-modal.component';
import { UpdateModalComponent } from './components/view-modal/update-modal/update-modal.component';
import { AdminComponent } from './components/admin/admin.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';

const baseUrl = 'http://localhost:3000'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SideBarComponent,
    TopBarComponent,
    // ProfileComponent,
    // UpdateUserComponent,
    modal,
    FileSelectDirective,
    UpdateModalComponent,
    // AdminComponent,
    // JwPaginationComponent
  ],
  entryComponents:[
    modal,
    UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'redbadgepatbrimol', upload_preset: 'unsigned'}),
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
    MatCheckboxModule,
    NgxPaginationModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatRippleModule,
    MatExpansionModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
