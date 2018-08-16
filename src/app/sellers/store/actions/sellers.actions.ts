import { Action } from '@ngrx/store';
import { SellerModel, SellerPayloadModel } from '../../../core/models/seller.model';


export enum SellersActionTypes {
  Load = '[Sellers] Load',
  LoadPageSuccess = '[Sellers] Load Success',
  LoadSellersSuccess = '[Sellers] Load Sellers Success',
  LoadFail = '[Sellers] Load Fail',
  Select = '[Sellers] Select',
  ResetSellerState = '[Sellers] Reset Seller State'
}

export class Load implements Action {
  readonly type = SellersActionTypes.Load;

  constructor(public payload: any) {
  }
}

export class LoadPageSuccess implements Action {
  readonly type = SellersActionTypes.LoadPageSuccess;

  constructor(public payload: SellerPayloadModel) {
  }
}

export class LoadSellersSuccess implements Action {
  readonly type = SellersActionTypes.LoadSellersSuccess;

  constructor(public payload: SellerModel[]) {
  }
}

export class LoadFail implements Action {
  readonly type = SellersActionTypes.LoadFail;

  constructor(public payload: any) {
  }
}

export class Select implements Action {
  readonly type = SellersActionTypes.Select;

  constructor(public payload: string) {
  }
}

export class ResetSellerState implements Action {
  readonly type = SellersActionTypes.ResetSellerState;
}

export type SellersActionsUnion =
  | Load
  | LoadPageSuccess
  | LoadSellersSuccess
  | LoadFail
  | Select
  | ResetSellerState;
