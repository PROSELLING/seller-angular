import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { AuthActions } from '../../../auth/store/actions';
import { AlertService } from '../alert.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromRoot.RootState>, private alertService: AlertService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401: {
              this.store.dispatch(new AuthActions.Logout());
              this.alertService.error('Tu sesión ha expirado');
            }
          }
        }
        return of(err);
      })
    );
  }
}
