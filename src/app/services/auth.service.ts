import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  registerUser(user: IUser) {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  getUserByEmail(email: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users?email=${email}`);
  }
}
