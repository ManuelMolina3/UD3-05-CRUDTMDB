import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../service/account.service';
import { ListMovie } from '../../models/movie-list-personal.interface';
import { ListPesonalDetailsResponse } from '../../models/get-list-personal-details.interface';

@Component({
  selector: 'app-list-movie-personal',
  templateUrl: './list-movie-personal.component.html',
  styleUrl: './list-movie-personal.component.css',
})
export class ListMoviePersonalComponent {
  @Input() list!: ListMovie;
  constructor(private accService: AccountService) {}

  deleteList(event: MouseEvent) {
    event.stopPropagation();
    this.accService.deleteList(this.list.id).subscribe((ans) => {
      window.location.reload();
    });
  }
  openPopOver(event: MouseEvent) {
    event.stopPropagation();
  }
}
