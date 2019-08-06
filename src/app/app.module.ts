import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { ExploreComponent } from './components/explore/explore.component';

const baseUrl = 'http://localhost:3000'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: [baseUrl],
        blacklistedRoutes: [`${baseUrl}/auth`]
      }
    })
  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
