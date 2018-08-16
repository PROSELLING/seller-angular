import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  ClientsActionTypes,
  Load,
  LoadClientsMeta,
  LoadClientsMetaFail,
  LoadClientsMetaSuccess,
  LoadClientsSuccess,
  LoadFail,
  LoadPageSuccess
} from '../actions/clients.actions';

import { ClientService } from '../../../core/services/client.service';
import { ClientPayloadModel } from '../../../core/models/client.model';
import { ClientMetaModel } from '../../../core/models/meta.model';


@Injectable()
export class ClientsEffects {
  @Effect()
  loadClients$ = this.actions$.pipe(
    ofType<Load>(ClientsActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.clientService.getClients(params)
        .pipe(
          mergeMap((res: ClientPayloadModel) => [
            new LoadPageSuccess(res),
            new LoadClientsSuccess(res.clients.data),
            new LoadClientsMeta()
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );
  @Effect()
  loadClientMeta$ = this.actions$.pipe(
    ofType<LoadClientsMeta>(ClientsActionTypes.LoadClientsMeta),
    mergeMap(() => {
      return this.clientService.getClientMeta()
        .pipe(
          map((res: ClientMetaModel) => new LoadClientsMetaSuccess(res)),
          catchError(error => of(new LoadClientsMetaFail(error))),
        );
      }
    )
  );

  constructor(
    private actions$: Actions,
    private clientService: ClientService,
    private router: Router
  ) {
  }
}
