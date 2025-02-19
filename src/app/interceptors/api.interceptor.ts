import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has('skipInterceptor')) {
      const headers = request.headers.delete('skipInterceptor');

      return next.handle(request.clone({ headers }));
    }

    const { apiVersion, apiBaseUrl } = environment;

    const apiReq = request.clone({
      url: `${apiBaseUrl}/api/v${apiVersion}/${request.url}`,
    });

    return next.handle(apiReq);
  }
}
