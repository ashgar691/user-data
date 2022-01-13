import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppComponent } from './app.component';
import { UserDeatailsComponent } from './components/user-deatails/user-deatails.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserDeatailsComponent,
    UserDashboardComponent,
    UserPostsComponent,
    SearchFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
