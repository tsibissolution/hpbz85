import { Injectable } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environments } from '../Environment';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const isApiUrl = request.url.startsWith(Environments.apiUrl);
    const userToken = sessionStorage.getItem('token');

    if (this.authService.IsLoggedIn()) {
      request = request.clone({
        setHeaders: { Token: `${userToken}` },
      });
    }

    return next.handle(request);
  }
}
