import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UsersStore } from '../stores/users.store';
import { BehaviorSubject, distinctUntilChanged, tap } from 'rxjs';
import { IGetUsersParams, UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  private readonly _filter = new BehaviorSubject<IGetUsersParams>({});
  readonly filter$ = this._filter.asObservable().pipe(distinctUntilChanged());

  constructor(
    private usersStore: UsersStore,
    private usersService: UsersService
  ) {}

  getUsers(queryParams?: IGetUsersParams) {
    return this.usersService
      .getUsers(queryParams)
      .pipe(tap((users) => this.usersStore.updateUsers(users)));
  }

  getUserById(id: IUser['id']) {
    return this.usersService.getUser(id);
  }

  newUser(user: IUser) {
    return this.usersService
      .newUser(user)
      .pipe(tap((user) => this.usersStore.updateUser(user)));
  }

  updateUser(id: IUser['id'], user: IUser) {
    return this.usersService
      .editUser(id, user)
      .pipe(tap(() => this.usersStore.updateUser(user)));
  }

  deleteUser(user: IUser) {
    return this.usersService
      .deleteUser(user.id)
      .pipe(tap(() => this.usersStore.deleteUser(user)));
  }
}
