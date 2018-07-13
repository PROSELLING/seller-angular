import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ClientsActionTypes, Load, LoadClientsSuccess, LoadFail, LoadPageSuccess } from '../actions/clients.actions';

import { ClientService } from '../../../core/services/client.service';
import { ClientObjectModel, ClientPayloadModel } from '../../../core/models/client.model';


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
          map( (res: ClientPayloadModel) => {
            this.updateElements(res);
            return res;
          }),
          mergeMap((res: ClientPayloadModel) => [
            new LoadPageSuccess(res),
            new LoadClientsSuccess(res.clients.data)
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

  private updateElements(res: ClientPayloadModel): void {
    res.client_type_phone = this.convertToArray(res.client_type_phone);
    res.origins = this.convertToArray(res.origins);
    res.channels = this.convertToArray(res.channels);
    res.documents = this.convertToArray(res.documents);
    res.marital_status = this.convertToArray(res.marital_status);
    res.ocupations = this.convertToArray(res.ocupations);
    res.type_locations = this.convertToArray(res.type_locations);
    res.client_relations = this.convertToArray(res.client_relations);
    res.client_type_mails = this.convertToArray(res.client_type_mails);
  }

  private convertToArray(obj: any): ClientObjectModel[] {
    const elements = [];
    for (const key of Object.keys(obj)) {
      elements.push({id: key, value: obj[key]});
    }
    return elements;
  }
}
