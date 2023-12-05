import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/get-list-personal-details.interface';

@Component({
  selector: 'app-list-movie-list',
  templateUrl: './list-movie-list.component.html',
  styleUrl: './list-movie-list.component.css',
})
export class ListMovieListComponent {
  @Input() item!: Item;
}
