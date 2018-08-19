import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

import * as fromClients from '../../clients/store';
import * as ClientActions from '../../clients/store/actions/client.actions';
import { ClientService } from '../services/client.service';
import { ClientModel } from '../models/client.model';

@Injectable()
export class ClientExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromClients.State>,
    private clientService: ClientService,
    private router: Router
  ) {

  }

  hasClientInStore(id: string): Observable<boolean> {
    return this.store.pipe(
      select(fromClients.getClientEntities),
      map(entities => !!entities[id]),
      take(1)
    );
  }

  hasClientInApi(id: string): Observable<boolean> {
    return this.clientService.getClient(id).pipe(
      map(clientPayload => {
        console.log('CLIENTRESPONSE', clientPayload);
        const client: ClientModel = clientPayload.client;
        client['client_address'] = clientPayload.client_address;
        client['client_contact'] = clientPayload.client_contact;
        client['client_mails'] = clientPayload.client_mails;
        client['client_networks'] = clientPayload.client_networks;
        return client;
      }),
      map(clientEntity => new ClientActions.Load(clientEntity)),
      tap((action: ClientActions.Load) => this.store.dispatch(action)),
      map(client => !!client),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }

  hasClient(id: string): Observable<boolean> {
    return this.hasClientInStore(id).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasClientInApi(id);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasClient(route.params['id']);
  }
}
