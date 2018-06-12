import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    const bearerToken = storedAuth.status.token;

    if (bearerToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${bearerToken}`)
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
