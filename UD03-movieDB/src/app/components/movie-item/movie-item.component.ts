import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input() movie!: Movie;

  getImgUrl(): string {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${this.movie.poster_path}`;
  }
}
