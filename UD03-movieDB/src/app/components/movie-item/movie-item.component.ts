import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Input() movieIndex!: number;
  @Output() toEmit = new EventEmitter<number>();

  openModal() {
    this.toEmit.emit(this.movieIndex);
  }

  getImgUrl(): string {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${this.movie.poster_path}`;
  }
}
