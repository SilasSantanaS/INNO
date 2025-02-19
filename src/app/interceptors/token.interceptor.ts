import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ITokens } from '../interfaces/user';
import { Observable, throwError } from 'rxjs';
import { AuthFacade } from '../facades/auth.facade';
import { catchError, finalize, map, switchMap, take } from 'rxjs/operators';

const INITIAL_STATE = {
  token: null,
  refreshToken: null,
  refreshTokenExpiresAt: null,
};

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private tokens: ITokens = INITIAL_STATE;

  private readonly tokens$ = this.authFacade.authState$.pipe(
    map(({ user }) => {
      return {
        token: user?.token,
        refreshToken: user?.refreshToken,
        refreshTokenExpiresAt: user?.refreshTokenExpiresAt,
      };
    })
  );

  private isRefreshing = false;

  constructor(private _router: Router, private authFacade: AuthFacade) {
    this.tokens$.subscribe((tokens) => (this.tokens = tokens));
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.tokens.token;

    if (!token) {
      token = JSON.parse(localStorage.getItem('guestToken') as string);
    }

    if (!token) return this.interceptWithTimeout(request, next);

    request = this.addTokenToHeader(request, token);

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse)
          if (error.status === 401) {
            this.authFacade.logout();
            this._router.navigate(['/auth/login']);

            return this.handleUnauthorizedError(request, next);
          }

        return throwError(() => error);
      })
    );
  }

  interceptWithTimeout(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return new Observable((observer) => {
      const token = this.tokens.token;

      setTimeout(() => {
        if (token) request = this.addTokenToHeader(request, token);

        next.handle(request).subscribe({
          next: (event) => observer.next(event),
          error: (error) => {
            if (error instanceof HttpErrorResponse)
              if (error.status === 401) {
                this.authFacade.logout();

                setTimeout(() => this._router.navigate(['/auth/login']), 2000);
              }

            return observer.error(error);
          },
          complete: () => observer.complete(),
        });
      });
    });
  }

  addTokenToHeader(request: HttpRequest<any>, token: ITokens['token']) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  handleUnauthorizedError(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.tokens.token && this.tokens.refreshToken)
        return this.authFacade
          .refreshToken({
            accessToken: this.tokens.token as string,
            refreshToken: this.tokens.refreshToken as string,
          })
          .pipe(
            finalize(() => (this.isRefreshing = false)),
            switchMap(({ token }) =>
              next.handle(this.addTokenToHeader(request, token))
            ),
            catchError((error) => {
              this.authFacade.logout();
              this._router.navigate(['/auth/login']);

              return throwError(() => error);
            })
          );
    }

    return this.tokens$.pipe(
      take(1),
      switchMap(({ token }) =>
        next.handle(this.addTokenToHeader(request, token))
      )
    );
  }
}
