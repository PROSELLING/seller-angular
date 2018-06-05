import { LayoutActionsUnion, LayoutActionTypes } from '../actions/layout.actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: true,
};

export function reducer(
  state: State = initialState,
  action: LayoutActionsUnion
) {
  switch (action.type) {
    case LayoutActionTypes.ToggleSidenav:
      return {
        showSidenav: !state.showSidenav
      };
    case LayoutActionTypes.CloseSidenav:
      return {
        showSidenav: false,
      };

    case LayoutActionTypes.OpenSidenav:
      return {
        showSidenav: true,
      };
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
