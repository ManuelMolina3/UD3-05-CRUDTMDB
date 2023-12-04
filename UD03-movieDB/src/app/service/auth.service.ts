import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetRequestTokenResponse } from '../models/created-token.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreatedSessionResponse } from '../models/created-session.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<GetRequestTokenResponse> {
    return this.http.get<GetRequestTokenResponse>(
      `https://api.themoviedb.org/3/authentication/token/new?${environment.apiKey}`
    );
  }

  createSession(token: string): Observable<CreatedSessionResponse> {
    return this.http.post<CreatedSessionResponse>(
      `https://api.themoviedb.org/3/authentication/session/new?${environment.apiKey}`,
      {
        request_token: token,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
