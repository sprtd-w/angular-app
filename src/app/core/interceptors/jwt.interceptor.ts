import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiUrl = true; // mock check

    if (this.authService.isAuthenticated && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.authService.currentUserValue?.token}` }
      });
    }

    return next.handle(request);
  }
}
