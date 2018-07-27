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

  private updateElements(res: SellerPayloadModel): void {
    res.seller_type_phone = this.convertToArray(res.seller_type_phone);
    res.origins = this.convertToArray(res.origins);
    res.channels = this.convertToArray(res.channels);
    res.documents = this.convertToArray(res.documents);
    res.marital_status = this.convertToArray(res.marital_status);
    res.ocupations = this.convertToArray(res.ocupations);
    res.type_locations = this.convertToArray(res.type_locations);
    res.seller_relations = this.convertToArray(res.seller_relations);
    res.seller_type_mails = this.convertToArray(res.seller_type_mails);
    res.genders = this.convertToArray(res.genders);
    res.person_type = this.convertToArray(res.person_type);
    res.charges = this.convertToArray(res.charges);
  }

  private convertToArray(obj: any): SellerObjectModel[] {
    const elements = [];
    for (const key of Object.keys(obj)) {
      elements.push({id: key, value: obj[key]});
    }
    return elements;
  }
}
