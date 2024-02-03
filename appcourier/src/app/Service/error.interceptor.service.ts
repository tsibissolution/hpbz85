import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService, private router:Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    // debugger
    return next.handle(request).pipe(catchError(err => {
      if([401,403].includes(err.status) && token){
        this.authService.isLoggetout();
        this.router.navigate(['']);
      }
      const error = err.error?.message || err.statusText;
      console.log(err);
      return throwError(() =>error);
    }));
  }
}
