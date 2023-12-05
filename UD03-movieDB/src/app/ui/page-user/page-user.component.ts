import { Component, TemplateRef } from '@angular/core';
import { AccountDetailsResponse } from '../../models/account-details.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AccountService } from '../../service/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListMovie } from '../../models/movie-list-personal.interface';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css',
})
export class PageUserComponent {
  user!: AccountDetailsResponse;
  listList!: ListMovie[];
  listaForm = new FormGroup({
    listName: new FormControl('', [Validators.required]),
    listDesc: new FormControl('', [Validators.required]),
  });
  name = '';
  descipcion = '';

  constructor(
    private serviceAcc: AccountService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.serviceAcc.getAccountDetails().subscribe((answ) => {
      localStorage.setItem('USER_ID', answ.id.toString());
      this.user = answ;
    });
    this.serviceAcc.getListPersonal().subscribe((ans) => {
      this.listList = ans.results;
    });
  }

  open(content: TemplateRef<any>, event: MouseEvent) {
    event.stopPropagation();
    this.modalService.open(content, { scrollable: true });
  }
  toSave() {
    this.serviceAcc.createdListMovie(this.name, this.descipcion).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => {
        alert('ASI NOOOO');
      },
    });
  }
}
