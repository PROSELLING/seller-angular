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
  LoadMetaSuccess, LoadProductsSuccess,
  ProductsActionTypes
} from '../actions/products.actions';
import { ProductService } from '../../../core/services/product.service';
import { ProductMetaModel, ProductPayloadModel } from '../../../core/models/product.model';



@Injectable()
export class ProductsEffects {
  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType<Load>(ProductsActionTypes.Load),
    map(action => action.payload),
    switchMap((params: any) =>
      this.productService
        .getProducts()
        .pipe(
          mergeMap((res: ProductPayloadModel) => [
            new LoadProductsSuccess(res.products),
            new LoadMeta()
          ]),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  loadProductsMeta$ = this.actions$.pipe(
    ofType<LoadMeta>(ProductsActionTypes.LoadMeta),
    mergeMap(() => {
      return this.productService.getProductsMeta()
        .pipe(
          map((res: ProductMetaModel) => new LoadMetaSuccess(res)),
          catchError(error => of(new LoadMetaFail(error)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {
  }
}
