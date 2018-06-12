import { Action } from '@ngrx/store';
import { MenuColorModel } from '../../models/menu-color.model';

export enum LayoutActionTypes {
  ToggleSidenav = '[Layout] Toggle Sidenav',
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  UpdateMenuColor = '[Layout] Update Menu Color',
  UpdateMenuColorSuccess = '[Layout] Update Menu Color Success'
}

export class ToggleSidenav implements Action {
  readonly type = LayoutActionTypes.ToggleSidenav;
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export class UpdateMenuColor implements Action {
  readonly type = LayoutActionTypes.UpdateMenuColor;

  constructor(public payload: string) {
  }
}

export class UpdateMenuColorSuccess implements Action {
  readonly type = LayoutActionTypes.UpdateMenuColorSuccess;

  constructor(public payload: MenuColorModel) {
  }
}

export type LayoutActionsUnion = ToggleSidenav | OpenSidenav | CloseSidenav | UpdateMenuColor | UpdateMenuColorSuccess;
