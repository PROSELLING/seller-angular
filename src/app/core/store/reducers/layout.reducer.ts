import { LayoutActionsUnion, LayoutActionTypes } from '../actions/layout.actions';
import { MenuColorModel } from '../../models/menu-color.model';

export interface State {
  showSidenav: boolean;
  menuColor: MenuColorModel;
}

const initialState: State = {
  showSidenav: true,
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
    case LayoutActionTypes.UpdateMenuColorSuccess:
      return {
        ...state,
        menuColor: action.payload
      }
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getMenuColor = (state: State) => state.menuColor;
