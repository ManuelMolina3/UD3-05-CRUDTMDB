import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUserComponent } from './ui/page-user/page-user.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { PageListComponent } from './ui/page-list/page-list.component';
import { PageMovieComponent } from './ui/page-movie/page-movie.component';

const routes: Routes = [
  { path: 'user/:id', component: PageUserComponent },
  { path: 'success', component: ApprovedComponent },
  { path: 'list/:id', component: PageListComponent },
  { path: '', component: PageMovieComponent },
  { path: '**', component: PageMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
