import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  paginaActual: number = 1;
  NumeroDePaginas!: number;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.paginacion();
  }
  paginacion(): void {
    this.movieService.getMovieList(this.paginaActual).subscribe((movie) => {
      this.movieList = movie.results;
      this.NumeroDePaginas = movie.total_pages;
    });
  }
}
