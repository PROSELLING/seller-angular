import { Action } from '@ngrx/store';
import { SellerModel, SellerPayloadModel } from '../../../core/models/seller.model';
import { LeadModel } from '../../../core/models/lead.model';


export enum SellersActionTypes {//variable de enumerables
  Load = '[Sellers] Load',
  LoadPageSuccess = '[Sellers] Load Success',
  LoadSellersSuccess = '[Sellers] Load Sellers Success',
  LoadLeads = '[Sellers] Load Available Leads',
  LoadFail = '[Sellers] Load Fail',
  Select = '[Sellers] Select',
  ResetSellerState = '[Sellers] Reset Seller State'
}

export class Load implements Action {
  readonly type = SellersActionTypes.Load;//readonly porque es inmutable el store
  //lo que quiere decir es: type = '[Sellers] Load'
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
/* 
  Autor: Miguel Peña
  Clase: LoadLeads
  Descripción: Cargar los leads disponibles en el sidenav
*/
export class LoadLeads implements Action {
  readonly type = SellersActionTypes.LoadLeads;

  constructor(public payload: LeadModel[]) {
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
  | LoadLeads
  | LoadFail
  | Select
  | ResetSellerState;
