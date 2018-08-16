import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { select, Store } from '@ngrx/store';
import { ClientsActions} from '../../../clients/store/actions';
import * as fromClient from '../../../clients/store';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';

@Injectable()
export class ClientStoreGuardService implements CanActivate {

  constructor(private store: Store<fromClient.State>, private route: Router, private alertService: AlertService) {
  }

  canActivate(): Observable<boolean> {
    return this.store
      .pipe(
        select(fromClient.getAllClients),
        map(clients => {
          if (!clients.length) {
            this.store.dispatch(new ClientsActions.Load({}));
          }
          return true;
        }),
        take(1)
      );
  }
}
