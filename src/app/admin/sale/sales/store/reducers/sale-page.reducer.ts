import { SaleActionsUnion, SaleActionTypes } from '../actions/sale.actions';

export interface State {
  currentPage: number;
  total: number;
}

export const initialState: State = {
  currentPage: 1,
  total: 0,
};

export function reducer(state = initialState, action: SaleActionsUnion): State {
  switch (action.type) {
    case SaleActionTypes.LoadPageSuccess: {
      return {
        ...state,
        currentPage: action.payload.sales.current_page,
        total: action.payload.sales.total,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrentPage = (state: State) => state.currentPage;
export const getTotal = (state: State) => state.total;
