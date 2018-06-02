import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BEARER_TOKEN } from './store.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const bearerToken = JSON.stringify(localStorage.getItem(BEARER_TOKEN));

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
