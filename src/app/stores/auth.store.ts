import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAuth } from '../interfaces/auth';
import { LocalStorageService } from '../services/local-storage.service';
import { SessionStorageService } from '../services/session-storage.service';

export interface IAuthState extends IAuth {}

export const INITIAL_STATE: IAuthState = {
  rememberMe: false,
  isAuthenticated: false,
};

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private _authState = new BehaviorSubject<IAuthState>(
    this.authStateStorage || INITIAL_STATE
  );

  readonly authState$ = this._authState.asObservable();

  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {}

  get authStateStorage() {
    return (
      this.localStorageService.get('auth') ||
      this.sessionStorageService.get('auth')
    );
  }

  login({ user, rememberMe }: IAuthState) {
    const state = this._authState.value;

    if (user?.accessToken) {
      user.token = user.accessToken;
      delete user.accessToken;
    }

    const data = {
      ...state,
      user,
      rememberMe: state.rememberMe || rememberMe,
      isAuthenticated: true,
    };

    this._authState.next(data);

    rememberMe
      ? this.localStorageService.set('auth', data)
      : this.sessionStorageService.set('auth', data);

    return this._authState.asObservable();
  }

  logout() {
    this._authState.next({
      user: null,
      rememberMe: false,
      isAuthenticated: false,
    });

    localStorage.clear();
    sessionStorage.clear();

    return this._authState.asObservable();
  }
}
