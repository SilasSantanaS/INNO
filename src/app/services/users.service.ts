import { Injectable } from '@angular/core';
import { IUser, IUsers } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface IGetUsersParams {
  search?: string;
  tenantId?: number;
  page?: number;
  pageLimit?: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private readonly _http: HttpClient) {}

  getUsers(queryParams?: IGetUsersParams) {
    return this._http.get<IUsers>(`${this.baseUrl}/users`, {
      params: queryParams as HttpParams,
    });
  }

  getUser(id: IUser['id']) {
    return this._http.get<IUser>(`${this.baseUrl}/users/${id}`);
  }

  newUser(user: IUser) {
    return this._http.post<IUser>(`${this.baseUrl}/users`, user);
  }

  editUser(id: IUser['id'], user: IUser) {
    return this._http.put<IUser>(`${this.baseUrl}/users/${id}`, user);
  }

  deleteUser(id: IUser['id']) {
    return this._http.delete<IUser>(`${this.baseUrl}/users/${id}`);
  }
}
