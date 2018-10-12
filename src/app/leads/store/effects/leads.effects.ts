import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { LeadsActionTypes, 
         Load, 
         LoadLeadsSuccess, 
         LoadFail, 
         LoadPageSuccess } from '../actions/leads.actions';

import { AvailableLeadsService } from '../../../core/services/available-leads.service';
import { LeadPayloadModel } from '../../../core/models/lead.model';
import { SellerService } from '../../../core/services/seller.service';




@Injectable()
export class LeadsEffects {
  @Effect()
  loadLeads$ = this.actions$.pipe(
    ofType<Load>(LeadsActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.leadService
        .available_leads(params)
        .pipe(
          map( (res: LeadPayloadModel) => {
            // this.updateElements(res);
            console.log('DENTRO DE EFFECT DE LEADS', res);
            // console.log('DENTRO DE EFFECT DE LEADS (PARAMS)', params);
            return res;
          }),
          mergeMap((res: LeadPayloadModel) => [
            new LoadPageSuccess(res),
            new LoadLeadsSuccess(res.leads.data)
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private leadService: AvailableLeadsService,
    private sellerService: SellerService,
    private router: Router
  ) {
  }
}
