import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ClientsActionTypes, Load, LoadFail, LoadSuccess } from '../actions/clients.actions';

import { ClientsService } from '../../../core/services/clients.service';
import { ClientsResponse } from '../../../core/models/client.model';


@Injectable()
export class ClientsEffects {
  @Effect()
  loadClients$ = this.actions$.pipe(
    ofType<Load>(ClientsActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.clientsService
        .getClients(params)
        .pipe(
          map((res: ClientsResponse) => new LoadSuccess(res)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private clientsService: ClientsService,
    private router: Router
  ) {
  }
}
