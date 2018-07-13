import { Action } from '@ngrx/store';
import { ClientModel, ClientPayloadModel } from '../../../core/models/client.model';


export enum ClientsActionTypes {
  Load = '[Clients] Load',
  LoadPageSuccess = '[Clients] Load Success',
  LoadClientsSuccess = '[Clients] Load Clients Success',
  LoadFail = '[Clients] Load Fail',
  Select = '[Clients] Select',
  ResetClientState = '[Clients] Reset Client State'
}

export class Load implements Action {
  readonly type = ClientsActionTypes.Load;

  constructor(public payload: any) {
  }
}

export class LoadPageSuccess implements Action {
  readonly type = ClientsActionTypes.LoadPageSuccess;

  constructor(public payload: ClientPayloadModel) {
  }
}

export class LoadClientsSuccess implements Action {
  readonly type = ClientsActionTypes.LoadClientsSuccess;

  constructor(public payload: ClientModel[]) {
  }
}

export class LoadFail implements Action {
  readonly type = ClientsActionTypes.LoadFail;

  constructor(public payload: any) {
  }
}

export class Select implements Action {
  readonly type = ClientsActionTypes.Select;

  constructor(public payload: string) {
  }
}

export class ResetClientState implements Action {
  readonly type = ClientsActionTypes.ResetClientState;
}

export type ClientsActionsUnion =
  | Load
  | LoadPageSuccess
  | LoadClientsSuccess
  | LoadFail
  | Select
  | ResetClientState;
