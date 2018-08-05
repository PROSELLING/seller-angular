import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Load, LoadFail, LoadPageSuccess, LoadSaleSuccess, SaleActionTypes } from '../actions/sale.actions';
import { SaleService } from '../../../../../core/services/sale.service';
import { SalePayloadModel } from '../../../../../core/models/sale.model';



@Injectable()
export class SaleEffects {
  @Effect()
  loadSales$ = this.actions$.pipe(
    ofType<Load>(SaleActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.saleService
        .getSales(params)
        .pipe(
          mergeMap((res: SalePayloadModel) => [
            new LoadPageSuccess(res),
            new LoadSaleSuccess(res.sales.data)
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private saleService: SaleService,
    private router: Router
  ) {
  }
}
