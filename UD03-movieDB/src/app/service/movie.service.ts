import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movie.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList(page: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${environment.apiBaseUrl}popular?${environment.apiKey}&page=${page}`
    );
  }
}
