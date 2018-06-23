import { Action } from '@ngrx/store';
import { MenuColorModel } from '../../models/menu-color.model';

export enum LayoutActionTypes {
  ToggleSidenav = '[Layout] Toggle Sidenav',
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  ToggleRightSidenav = '[Layout] Toggle Right Sidenav',
  OpenRightSidenav = '[Layout] Open Right Sidenav',
  CloseRightSidenav = '[Layout] Close Right Sidenav',
  UpdateMenuColor = '[Layout] Update Menu Color',
  UpdateMenuColorSuccess = '[Layout] Update Menu Color Success',
  ResetLayoutState = '[Layout] Reset Layout State'
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

export class ToggleRightSidenav implements Action {
  readonly type = LayoutActionTypes.ToggleRightSidenav;
}

export class OpenRightSidenav implements Action {
  readonly type = LayoutActionTypes.OpenRightSidenav;
}

export class CloseRightSidenav implements Action {
  readonly type = LayoutActionTypes.CloseRightSidenav;
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

export class ResetLayoutState implements Action {
  readonly type = LayoutActionTypes.ResetLayoutState;
}

export type LayoutActionsUnion =
  ToggleSidenav |
  OpenSidenav |
  CloseSidenav |
  ToggleRightSidenav |
  OpenRightSidenav |
  CloseRightSidenav |
  UpdateMenuColor |
  UpdateMenuColorSuccess |
  ResetLayoutState;
