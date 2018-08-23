import { Action } from '@ngrx/store';
import { SaleMetaResponseModel, SaleModel } from '../../../../core/models/sale.model';



export enum SalesActionTypes {
  Load = '[Sales] Load',
  LoadPageSuccess = '[Sales] Load Success',
  LoadSalesSuccess = '[Sales] Load Sale Success',
  LoadFail = '[Sales] Load Fail',
  LoadMeta = '[Sales] Load Meta',
  LoadMetaSuccess = '[Sales] Load Meta Success',
  LoadMetaFail = '[Sales] Load Meta Fail',
  Select = '[Sales] Select',
  ResetSaleState = '[Sales] Reset Sale State'
}

export class Load implements Action {
  readonly type = SalesActionTypes.Load;

  constructor(public payload: any) {
  }
}

export class LoadPageSuccess implements Action {
  readonly type = SalesActionTypes.LoadPageSuccess;

  constructor(public payload: any) {
  }
}

export class LoadSalesSuccess implements Action {
  readonly type = SalesActionTypes.LoadSalesSuccess;

  constructor(public payload: SaleModel[]) {
  }
}

export class LoadFail implements Action {
  readonly type = SalesActionTypes.LoadFail;

  constructor(public payload: any) {
  }
}

export class LoadMeta implements Action {
  readonly type = SalesActionTypes.LoadMeta;
}

export class LoadMetaSuccess implements Action {
  readonly type = SalesActionTypes.LoadMetaSuccess;

  constructor(public payload: SaleMetaResponseModel) {
  }
}

export class LoadMetaFail implements Action {
  readonly type = SalesActionTypes.LoadMetaFail;

  constructor(public payload: any) {
  }
}

export class Select implements Action {
  readonly type = SalesActionTypes.Select;

  constructor(public payload: string) {
  }
}

export class ResetClientState implements Action {
  readonly type = SalesActionTypes.ResetSaleState;
}

export type SaleActionsUnion =
  | Load
  | LoadPageSuccess
  | LoadSalesSuccess
  | LoadFail
  | LoadMeta
  | LoadMetaSuccess
  | LoadMetaFail
  | Select
  | ResetClientState;
