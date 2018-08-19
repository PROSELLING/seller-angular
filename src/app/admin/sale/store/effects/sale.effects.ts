import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import {
  Load,
  LoadFail,
  LoadMeta,
  LoadMetaFail,
  LoadMetaSuccess,
  LoadPageSuccess,
  LoadSaleSuccess,
  SaleActionTypes
} from '../actions/sale.actions';
import { SaleService } from '../../../../core/services/sale.service';
import { SaleMetaResponseModel, SalePayloadModel } from '../../../../core/models/sale.model';



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
            new LoadSaleSuccess(res.sales.data),
            new LoadMeta()
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  loadSaleMeta$ = this.actions$.pipe(
    ofType<LoadMeta>(SaleActionTypes.LoadMeta),
    mergeMap(() => {
      return this.saleService.getSaleMeta()
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
