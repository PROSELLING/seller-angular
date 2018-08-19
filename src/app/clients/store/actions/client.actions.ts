import { Action } from '@ngrx/store';
import { ClientModel } from '../../../core/models/client.model';


export enum ClientActionTypes {
  Load = '[Client] Load',
  Select = '[Client] Select'
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

export type ClientActionsUnion =
  | Load
  | Select;
