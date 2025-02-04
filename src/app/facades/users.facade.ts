import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UsersStore } from '../stores/users.store';
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  interval,
  map,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { IGetUsersParams, UsersService } from '../services/users.service';

const REFRESH_INTERVAL = 120 * 1000;

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  private readonly autoRefresh$ = interval(REFRESH_INTERVAL).pipe(startWith(0));
  private readonly _refresh = new BehaviorSubject(undefined);

  private readonly _filter = new BehaviorSubject<IGetUsersParams>({});
  readonly filter$ = this._filter.asObservable().pipe(distinctUntilChanged());

  private readonly handleRequest$ = combineLatest([
    this.filter$,
    this.autoRefresh$,
    this._refresh.asObservable(),
  ]).pipe(
    switchMap(() => this.getUsers({ ...this._filter.value, pageLimit: 10 }))
  );

  readonly usersState$ = combineLatest([
    this.usersStore.usersState$,
    this.handleRequest$,
  ]).pipe(
    map(([state]) => {
      return state;
    }),
    shareReplay({ refCount: true })
  );

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

  filterUsers(filter: IGetUsersParams) {
    this._filter.next({ ...this._filter.value, ...filter });
  }
}
