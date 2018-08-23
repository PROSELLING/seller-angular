import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  Load,
  LoadFail,
  LoadMeta,
  LoadMetaFail,
  LoadMetaSuccess,
  LoadPageSuccess,
  LoadSalesSuccess,
  SalesActionTypes
} from '../actions/sales.actions';
import { SaleService } from '../../../../core/services/sale.service';
import { SaleMetaResponseModel, SalePayloadModel } from '../../../../core/models/sale.model';



@Injectable()
export class SalesEffects {
  @Effect()
  loadSales$ = this.actions$.pipe(
    ofType<Load>(SalesActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.saleService
        .getSales(params)
        .pipe(
          mergeMap((res: SalePayloadModel) => [
            new LoadPageSuccess(res),
            new LoadSalesSuccess(res.sales.data),
            new LoadMeta()
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  loadSalesMeta$ = this.actions$.pipe(
    ofType<LoadMeta>(SalesActionTypes.LoadMeta),
    mergeMap(() => {
      return this.saleService.getSalesMeta()
        .pipe(
          map((res: SaleMetaResponseModel) => new LoadMetaSuccess(res)),
          catchError(error => of(new LoadMetaFail(error)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private saleService: SaleService,
    private router: Router
  ) {
  }
}
