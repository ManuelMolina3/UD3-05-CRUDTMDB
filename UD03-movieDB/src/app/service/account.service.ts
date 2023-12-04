import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { environment } from '../../environments/environment';
import { MovieListPersonalResponse } from '../models/movie-list-personal.interface';
import { CreatedListPersonalResponse } from '../models/created-list-personal.interface';
import { ListPesonalDetailsResponse } from '../models/get-list-personal-details.interface';
import { DeleteListPersonalResponse } from '../models/delete-list-personal.interface';
import { ClearListResponse } from '../models/clear-list-personal.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  getAccountDetails(): Observable<AccountDetailsResponse>{
    return this.http.get<AccountDetailsResponse>(`https://api.themoviedb.org/3/account?session_id=${localStorage.getItem("SESSION_ID")}&${environment.apiKey}`);
  }
  getListPersonal(): Observable<MovieListPersonalResponse>{
    return this.http.get<MovieListPersonalResponse>(`https://api.themoviedb.org/3/account/${localStorage.getItem("ACCOUNT_ID")}/lists?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`);
  }
  createdListMovie(name: string, description: string): Observable<CreatedListPersonalResponse>{
    return this.http.post<CreatedListPersonalResponse>(`https://api.themoviedb.org/3/list?session_id${localStorage.getItem("SESSION_ID")}&${environment.apiKey}`,
    {
      
        "name": name,
        "description": description,
        "language": "es"
    
    });
  }
  getListDetails(listId: any):Observable<ListPesonalDetailsResponse>{
    return this.http.get<ListPesonalDetailsResponse>(`https://api.themoviedb.org/3/list/${listId}?${environment.apiKey}`)
  }
  deleteList(listId: any):Observable<DeleteListPersonalResponse>{
    return this.http.delete<DeleteListPersonalResponse>(`https://api.themoviedb.org/3/list/${listId}?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}`);
  }
  clearList(listId: any):Observable<ClearListResponse>{
    return this.http.post<ClearListResponse>(`https://api.themoviedb.org/3/list/${listId}/clear?${environment.apiKey}&session_id=${localStorage.getItem("SESSION_ID")}&confirm=true`,
    {

    });
  }
}
