import { LayoutActionsUnion, LayoutActionTypes } from '../actions/layout.actions';
import { MenuColorModel } from '../../models/menu-color.model';

export interface State {
  showSidenav: boolean;
  showRightSidenav: boolean;
  menuColor: MenuColorModel;
}

const initialState: State = {
  showSidenav: true,
  showRightSidenav: false,
  menuColor: {name: 'gray', color: '#c9d4d9'}
};

export function reducer(
  state: State = initialState,
  action: LayoutActionsUnion
) {
  switch (action.type) {
    case LayoutActionTypes.ToggleSidenav:
      return {
        ...state,
        showSidenav: !state.showSidenav
      };
    case LayoutActionTypes.CloseSidenav:
      return {
        ...state,
        showSidenav: false,
      };

    case LayoutActionTypes.OpenSidenav:
      return {
        ...state,
        showSidenav: true,
      };
    case LayoutActionTypes.ToggleRightSidenav:
      return {
        ...state,
        showRightSidenav: !state.showRightSidenav
      };
    case LayoutActionTypes.CloseRightSidenav:
      return {
        ...state,
        showRightSidenav: false,
      };

    case LayoutActionTypes.OpenRightSidenav:
      return {
        ...state,
        showRightSidenav: true,
      };
    case LayoutActionTypes.UpdateMenuColorSuccess:
      return {
        ...state,
        menuColor: action.payload
      };
    case LayoutActionTypes.ResetLayoutState: {
      return initialState;
    }
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getShowRightSidenav = (state: State) => state.showRightSidenav;
export const getMenuColor = (state: State) => state.menuColor;
