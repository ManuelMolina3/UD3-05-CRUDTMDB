import { Component, OnInit } from '@angular/core';
import { AccountDetailsResponse } from '../../models/account-details.interface';
import { AuthService } from '../../service/auth.service';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  user!: AccountDetailsResponse;
  constructor(
    private serviceAuth: AuthService,
    private serviceAcc: AccountService
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('SESSION_ID') != null) {
      this.serviceAcc.getAccountDetails().subscribe((answ) => {
        localStorage.setItem('USER_ID', answ.id.toString());
        this.user = answ;
      });
    }
  }
  createRequestToken() {
    this.serviceAuth.getToken().subscribe((answ) => {
      localStorage.setItem('REQUEST_TOKEN', answ.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem(
        'REQUEST_TOKEN'
      )}?redirect_to=http://localhost:4200/success`;
    });
  }
  isUserRegister(): boolean {
    let user_id = localStorage.getItem('SESSION_ID');
    return user_id == null ? true : false;
  }
}
