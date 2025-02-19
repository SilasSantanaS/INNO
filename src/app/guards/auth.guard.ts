import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthFacade } from '../facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private readonly isAuthenticated$ = this.authFacade.authState$.pipe(
    map(({ isAuthenticated }) => isAuthenticated)
  );

  constructor(private _router: Router, private authFacade: AuthFacade) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return (this.isAuthenticated$ as Observable<boolean>).pipe(
      tap(
        (isAuthenticated) =>
          !isAuthenticated && this._router.navigate(['/auth/login'])
      )
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
