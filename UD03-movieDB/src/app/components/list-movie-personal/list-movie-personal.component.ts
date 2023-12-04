import { Component, Input, TemplateRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../service/account.service';
import { ListMovie } from '../../models/movie-list-personal.interface';
import { ListPesonalDetailsResponse } from '../../models/get-list-personal-details.interface';

@Component({
  selector: 'app-list-movie-personal',
  templateUrl: './list-movie-personal.component.html',
  styleUrl: './list-movie-personal.component.css'
})
export class ListMoviePersonalComponent {
  listSelected!: ListPesonalDetailsResponse;
  idFilm= new FormControl('', Validators.required);
  idList= new FormControl('', Validators.required);
  name= new FormControl('', Validators.required);
  description= new FormControl('', Validators.required);
  delete= false;
  @Input() listMovies!: ListMovie[];

  constructor(private modalService: NgbModal, private accountService: AccountService){}

  open(content: TemplateRef<any>){
    this.modalService.open(content);
  }
  openDetailsList(content: TemplateRef<any>, idList: any){
    this.accountService.getListDetails(idList).subscribe(resp=>{
      this.modalService.open(content);
      this.listSelected = resp;
    });
  }
  clearList(listId: any){
    this.accountService.clearList(listId).subscribe()
      this.modalService.dismissAll();
    
  }
  deleteList(listId: any){
    this.accountService.deleteList(listId).subscribe();
    this.delete= true
  }
}
