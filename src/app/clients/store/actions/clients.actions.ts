import { Action } from '@ngrx/store';
import { ClientModel, ClientPayloadModel } from '../../../core/models/client.model';
import { ClientMetaModel } from '../../../core/models/meta.model';


export enum ClientsActionTypes {
  Load = '[Clients] Load',
  LoadPageSuccess = '[Clients] Load Success',
  LoadClientsSuccess = '[Clients] Load Clients Success',
  LoadFail = '[Clients] Load Fail',
  LoadClientsMeta = '[Clients] Load Clients Meta',
  LoadClientsMetaSuccess = '[Clients] Load Clients Meta Success',
  LoadClientsMetaFail = '[Clients] Load Clients Meta Fail',
  Select = '[Clients] Select',
  ResetClientState = '[Clients] Reset Client State',
  SelectedSearchClient = '[Clients] Selected Client',
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

export class LoadClientsMeta implements Action {
  readonly type = ClientsActionTypes.LoadClientsMeta;
}

export class LoadClientsMetaSuccess implements Action {
  readonly type = ClientsActionTypes.LoadClientsMetaSuccess;

  constructor(public payload: ClientMetaModel) {
  }
}

export class LoadClientsMetaFail implements Action {
  readonly type = ClientsActionTypes.LoadClientsMetaFail;

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

export class SelectedSearchClient implements Action {
  readonly type = ClientsActionTypes.SelectedSearchClient;

  constructor(public payload: ClientModel) {
  }
}

export type ClientsActionsUnion =
  | Load
  | LoadPageSuccess
  | LoadClientsSuccess
  | LoadFail
  | LoadClientsMeta
  | LoadClientsMetaSuccess
  | LoadClientsMetaFail
  | Select
  | ResetClientState
  | SelectedSearchClient;
