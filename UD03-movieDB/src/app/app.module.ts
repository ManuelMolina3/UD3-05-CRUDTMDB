import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageMovieComponent } from './ui/page-movie/page-movie.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { ListMoviePersonalComponent } from './components/list-movie-personal/list-movie-personal.component';
import { PageListComponent } from './ui/page-list/page-list.component';
import { PageUserComponent } from './ui/page-user/page-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListMovieListComponent } from './components/list-movie-list/list-movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    NavbarComponent,
    PageMovieComponent,
    ApprovedComponent,
    ListMoviePersonalComponent,
    PageListComponent,
    PageUserComponent,
    ListMovieListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
