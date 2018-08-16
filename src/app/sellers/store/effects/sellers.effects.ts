import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { SellersActionTypes, Load, LoadSellersSuccess, LoadFail, LoadPageSuccess } from '../actions/sellers.actions';

import { SellerService } from '../../../core/services/seller.service';
import { SellerObjectModel, SellerPayloadModel } from '../../../core/models/seller.model';


@Injectable()
export class SellersEffects {
  @Effect()
  loadSellers$ = this.actions$.pipe(
    ofType<Load>(SellersActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.sellerService
        .getSellers(params)
        .pipe(
          map( (res: SellerPayloadModel) => {
            // this.updateElements(res);
            return res;
          }),
          mergeMap((res: SellerPayloadModel) => [
            new LoadPageSuccess(res),
            new LoadSellersSuccess(res.sellers.data)
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private sellerService: SellerService,
    private router: Router
  ) {
  }
}
