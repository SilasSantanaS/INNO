import { Injectable } from '@angular/core';
import { IUser, IUsers } from '../interfaces/user';
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
  constructor(private readonly _http: HttpClient) {}

  getUsers(queryParams?: IGetUsersParams) {
    return this._http.get<IUsers>('users', {
      params: queryParams as HttpParams,
    });
  }

  getUser(id: IUser['id']) {
    return this._http.get<IUser>(`users/${id}`);
  }

  newUser(user: IUser) {
    return this._http.post<IUser>('users', user);
  }

  editUser(id: IUser['id'], user: IUser) {
    return this._http.put<IUser>(`users/${id}`, user);
  }

  deleteUser(id: IUser['id']) {
    return this._http.delete<IUser>(`users/${id}`);
  }
}
