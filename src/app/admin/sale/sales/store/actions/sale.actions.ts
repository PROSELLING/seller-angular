import { Action } from '@ngrx/store';
import { SaleMetaResponseModel, SaleModel } from '../../../../../core/models/sale.model';


export enum SaleActionTypes {
  Load = '[Sale] Load',
  LoadPageSuccess = '[Sale] Load Success',
  LoadSaleSuccess = '[Sale] Load Sale Success',
  LoadFail = '[Sale] Load Fail',
  LoadMeta = '[Sale] Load Meta',
  LoadMetaSuccess = '[Sale] Load Meta Success',
  LoadMetaFail = '[Sale] Load Meta Fail',
  Select = '[Sale] Select',
  ResetSaleState = '[Sale] Reset Sale State'
}

export class Load implements Action {
  readonly type = SaleActionTypes.Load;

  constructor(public payload: any) {
  }
}

export class LoadPageSuccess implements Action {
  readonly type = SaleActionTypes.LoadPageSuccess;

  constructor(public payload: any) {
  }
}

export class LoadSaleSuccess implements Action {
  readonly type = SaleActionTypes.LoadSaleSuccess;

  constructor(public payload: SaleModel[]) {
  }
}

export class LoadFail implements Action {
  readonly type = SaleActionTypes.LoadFail;

  constructor(public payload: any) {
  }
}

export class LoadMeta implements Action {
  readonly type = SaleActionTypes.LoadMeta;
}

export class LoadMetaSuccess implements Action {
  readonly type = SaleActionTypes.LoadMetaSuccess;

  constructor(public payload: SaleMetaResponseModel) {
  }
}

export class LoadMetaFail implements Action {
  readonly type = SaleActionTypes.LoadMetaFail;

  constructor(public payload: any) {
  }
}

export class Select implements Action {
  readonly type = SaleActionTypes.Select;

  constructor(public payload: string) {
  }
}

export class ResetClientState implements Action {
  readonly type = SaleActionTypes.ResetSaleState;
}

export type SaleActionsUnion =
  | Load
  | LoadPageSuccess
  | LoadSaleSuccess
  | LoadFail
  | LoadMeta
  | LoadMetaSuccess
  | LoadMetaFail
  | Select
  | ResetClientState;
