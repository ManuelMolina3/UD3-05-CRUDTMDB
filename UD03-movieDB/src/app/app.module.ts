import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageMovieComponent } from './ui/page-movie/page-movie.component';
import { LsitMovieComponent } from './components/lsit-movie/lsit-movie.component';
import { ApprovedComponent } from './components/approved/approved.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    NavbarComponent,
    PageMovieComponent,
    LsitMovieComponent,
    ApprovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
