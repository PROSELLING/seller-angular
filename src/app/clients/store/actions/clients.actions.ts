import { Action } from '@ngrx/store';
import { ClientsResponse } from '../../../core/models/client.model';


export enum ClientsActionTypes {
  Load = '[Clients] Load',
  LoadSuccess = '[Clients] Load Success',
  LoadFail = '[Clients] Load Fail'
}

export class Load implements Action {
  readonly type = ClientsActionTypes.Load;

  constructor(public payload: any) {
  }
}

export class LoadSuccess implements Action {
  readonly type = ClientsActionTypes.LoadSuccess;

  constructor(public payload: ClientsResponse) {
  }
}

export class LoadFail implements Action {
  readonly type = ClientsActionTypes.LoadFail;

  constructor(public payload: any) {
  }
}

export type ClientsActionsUnion =
  | Load
  | LoadSuccess
  | LoadFail;
