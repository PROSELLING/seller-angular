import { Action } from '@ngrx/store';
import { ClientModel } from '../../../core/models/client.model';
import { ObjectModel } from '../../../core/models/meta.model';


export enum ClientActionTypes {
  Load = '[Client] Load',
  Select = '[Client] Select',
  LoadOrigin = '[Client] Load Origin',
  LoadOriginSuccess = '[Client] Load Origin Success',
  LoadOriginFail = '[Client] Load Origin Fail',
}

export class Load implements Action {
  readonly type = ClientActionTypes.Load;

  constructor(public payload: ClientModel) {
  }
}

export class Select implements Action {
  readonly type = ClientActionTypes.Select;

  constructor(public payload: string) {
  }
}

export class LoadOrigin implements Action {
  readonly type = ClientActionTypes.LoadOrigin;

  constructor(public payload: number) {
  }
}

export class LoadOriginSuccess implements Action {
  readonly type = ClientActionTypes.LoadOriginSuccess;

  constructor(public payload: ObjectModel[]) {
  }
}

export class LoadOriginFail implements Action {
  readonly type = ClientActionTypes.LoadOriginFail;

  constructor(public payload: any) {
  }
}

export type ClientActionsUnion =
  | Load
  | Select
  | LoadOrigin
  | LoadOriginSuccess
  | LoadOriginFail;
