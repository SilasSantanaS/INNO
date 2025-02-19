import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

export interface ILoginBody {
  email: IUser['email'];
  password: IUser['password'];
  rememberMe?: boolean;
}

export interface IRefreshTokenBody {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.apiBaseUrl;
  //private baseUrl: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  login(body: ILoginBody) {
    return this._http
      .post<IUser>(`auth/login`, body)
      .pipe(shareReplay());
  }

  refreshToken(body: IRefreshTokenBody) {
    return this._http.post<IUser>(`auth/refresh`, body);
  }

  revokeToken(id: IUser['id']) {
    return this._http.post(`auth/revoke/${id}`, null).pipe(shareReplay());
  }

  registerUser(user: IUser) {
    return this._http.post(`users`, user);
  }

  getUserByEmail(email: string): Observable<IUser[]> {
    return this._http.get<IUser[]>(`users?email=${email}`);
  }
}
