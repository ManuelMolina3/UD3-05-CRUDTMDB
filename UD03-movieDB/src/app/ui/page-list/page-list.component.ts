import { Component, OnInit, inject } from '@angular/core';
import {
  Item,
  ListPesonalDetailsResponse,
} from '../../models/get-list-personal-details.interface';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css',
})
export class PageListComponent implements OnInit {
  list!: Item[];
  listInfo!: ListPesonalDetailsResponse;
  route: ActivatedRoute = inject(ActivatedRoute);
  listId: number;
  constructor(private accService: AccountService) {
    this.listId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.accService.getListDetails(this.listId).subscribe((ans) => {
      this.list = ans.items;
      this.listInfo = ans;
    });
  }
  clearList() {
    this.accService.clearList(this.listId).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => {
        debugger;
        alert('que hisiste');
      },
    });
  }
}
