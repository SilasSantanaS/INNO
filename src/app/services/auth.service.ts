import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private baseUrl: string = environment.apiBaseUrl;
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  registerUser(user: IUser) {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  getUserByEmail(email: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users?email=${email}`);
  }
}
