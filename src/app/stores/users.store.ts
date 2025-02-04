import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser, IUsers } from '../interfaces/user';

export interface IUsersState extends IUsers {}

export const INITIAL_STATE: IUsersState = {
  metadata: {
    page: 0,
    count: 0,
    pageLimit: 0,
  },
  result: [],
};

@Injectable({
  providedIn: 'root',
})
export class UsersStore {
  private _usersState = new BehaviorSubject<IUsersState>(INITIAL_STATE);
  readonly usersState$ = this._usersState.asObservable();

  constructor() {}

  updateUsers(patients: IUsersState) {
    const state = this._usersState.value;

    const data = {
      ...state,
      ...patients,
    };

    this._usersState.next(data);

    return this._usersState.asObservable();
  }

  updateUser(user: IUser): Observable<IUsersState> {
    const state = this._usersState.value;
    const index = state.result.findIndex(({ id }) => id === user.id);

    if (index >= 0) {
      state.result[index] = {
        ...state.result[index],
        ...user,
      };
    } else {
      state.result.push(user);
    }

    const data = state;

    this._usersState.next(data);

    return this._usersState.asObservable();
  }

  deleteUser(user: IUser): Observable<IUsersState> {
    const state = this._usersState.value;
    const index = state.result.findIndex(({ id }) => id == user.id);

    state.result.splice(index, 1);

    const data = state;

    this._usersState.next(data);

    return this._usersState.asObservable();
  }
}
