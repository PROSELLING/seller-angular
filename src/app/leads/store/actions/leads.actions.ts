import { Action } from '@ngrx/store';
import { LeadModel, LeadPayloadModel } from '../../../core/models/lead.model';

export enum LeadsActionTypes { //variable de enumerables
  Load = '[Leads] Load',
  SelectedLeadList = '[Leads] Selected Lead List',
  LoadPageSuccess = '[Leads] Load Success',
  LoadLeadsSuccess = '[Leads] Load Leads Success',
  LoadFail = '[Leads] Load Fail',
  Select = '[Leads] Select',
  ResetLeadState = '[Leads] Reset Lead State',
  // Acción para asignación manual de los leads a un vendedor
  ManualAsignLeadSeller = '[Leads] Manual Asign Lead Seller '

}

export class Load implements Action {
  readonly type = LeadsActionTypes.Load;//readonly porque es inmutable el store
  //lo que quiere decir es: type = '[Sellers] Load'
  constructor(public payload: any) {
  }
}

export class ManualAsignLeadSeller implements Action{
  readonly type = LeadsActionTypes.ManualAsignLeadSeller;

  constructor( public payload: any){};
}

export class SelectedLeadsListAction implements Action {
  readonly type = LeadsActionTypes.SelectedLeadList;//readonly porque es inmutable el store
  //lo que quiere decir es: type = '[Sellers] Load'
  constructor(public id: string) {}
}

export class LoadPageSuccess implements Action {
  readonly type = LeadsActionTypes.LoadPageSuccess;

  constructor(public payload: LeadPayloadModel) {
  }
}

export class LoadLeadsSuccess implements Action {
  readonly type = LeadsActionTypes.LoadLeadsSuccess;

  constructor(public payload: LeadModel[]) {
  }
}

export class LoadFail implements Action {
  readonly type = LeadsActionTypes.LoadFail;

  constructor(public payload: any) {
  }
}

export class Select implements Action {
  readonly type = LeadsActionTypes.Select;

  constructor(public payload: string) {
  }
}

export class ResetLeadState implements Action {
  readonly type = LeadsActionTypes.ResetLeadState;
}

export type LeadsActionsUnion =
  | Load
  | SelectedLeadsListAction
  | LoadPageSuccess
  | LoadLeadsSuccess
  | LoadFail
  | Select
  | ResetLeadState
  | ManualAsignLeadSeller;
