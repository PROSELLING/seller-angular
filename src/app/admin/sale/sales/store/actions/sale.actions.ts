import { Action } from '@ngrx/store';


export enum SaleActionTypes {
  Load = '[Sale] Load',
  LoadPageSuccess = '[Sale] Load Success',
  LoadSaleSuccess = '[Sale] Load Sale Success',
  LoadFail = '[Sale] Load Fail',
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

  constructor(public payload: any) {
  }
}

export class LoadFail implements Action {
  readonly type = SaleActionTypes.LoadFail;

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
  | Select
  | ResetClientState;
