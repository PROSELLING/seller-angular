import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/store';
import { AuthActions } from '../../../auth/store/actions';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromAuth.State>, private route: Router, private alertService: AlertService) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(loggedIn => {
        if (!loggedIn) {
          this.store.dispatch(new AuthActions.LoginRedirect());
          this.alertService.error('Por favor inicia sesión');
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
