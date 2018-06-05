import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  ToggleSidenav = '[Layout] Toggle Sidenav',
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
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

export type LayoutActionsUnion = ToggleSidenav | OpenSidenav | CloseSidenav;
