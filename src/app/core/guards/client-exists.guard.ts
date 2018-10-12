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
    console.log('METODO hasClientInStore', this.store.pipe(
      select(fromClients.getClientEntities),
      map(entities => !!entities[id]),
      take(1)
    ).subscribe( data => {console.log( 'dato de hasclientinstore:', data )}));
    return this.store.pipe(
      select(fromClients.getClientEntities),
      map(entities => !!entities[id]),
      take(1)
    );
  }

  hasClientInApi(id: string): Observable<boolean> {
    console.log('METODO hasClientInApi', this.clientService.getClient(id).pipe(
      map(clientResponse => new ClientActions.Load(clientResponse.client[0])),
      tap((action: ClientActions.Load) => this.store.dispatch(action)),
      map(client => !!client),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    ).subscribe( data => { console.log(data)}));

    return this.clientService.getClient(id).pipe(
      map(clientResponse => new ClientActions.Load(clientResponse.client[0])),
      tap((action: ClientActions.Load) => this.store.dispatch(action)),
      map(client => !!client),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }

  hasClient(id: string): Observable<boolean> {
    console.log('METODO hasClient');
    return this.hasClientInStore(id).pipe(
      switchMap(inStore => {
        if (inStore) {
          console.log('dentro del switch map: ', of(inStore).subscribe( data => { console.log(' aquí el dato: ',data) }));
          return of(inStore);
        }
        console.log('dentro del swithc map (no inStore): ', this.hasClientInApi(id));
        return this.hasClientInApi(id);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log('METODO canActivate', this.hasClient(route.params['id']));
    return this.hasClient(route.params['id']);
  }
}
