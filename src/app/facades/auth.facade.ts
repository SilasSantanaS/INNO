import { shareReplay, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { AuthStore } from '../stores/auth.store';
import {
  AuthService,
  ILoginBody,
  IRefreshTokenBody,
} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  readonly authState$ = this.authStore.authState$;

  constructor(private authService: AuthService, private authStore: AuthStore) {}

  login({ email, password, rememberMe }: ILoginBody) {
    return this.authService
      .login({ email, password })
      .pipe(tap((user) => this.authStore.login({ user, rememberMe })));
  }

  logout(id?: IUser['id']) {
    return this.authStore.logout().pipe(
      shareReplay(),
      tap(() => id && this.revokeToken(id))
    );
  }

  refreshToken(body: IRefreshTokenBody) {
    return this.authService
      .refreshToken(body)
      .pipe(tap((user) => this.authStore.login({ user })));
  }

  revokeToken(id: IUser['id']) {
    return this.authService.revokeToken(id);
  }
}
