import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ClientsActionTypes, Load, LoadClientsSuccess, LoadFail, LoadPageSuccess } from '../actions/clients.actions';

import { ClientService } from '../../../core/services/client.service';
import { ClientsResponse } from '../../../core/models/client.model';


@Injectable()
export class ClientsEffects {
  @Effect()
  loadClients$ = this.actions$.pipe(
    ofType<Load>(ClientsActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.clientService
        .getClients(params)
        .pipe(
          mergeMap((res: ClientsResponse) => [
            new LoadPageSuccess(res),
            new LoadClientsSuccess(res.data)
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private clientService: ClientService,
    private router: Router
  ) {
  }
}
