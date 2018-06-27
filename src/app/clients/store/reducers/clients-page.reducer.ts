import { ClientsActionsUnion, ClientsActionTypes } from '../actions/clients.actions';

export interface State {
  currentPage: number;
  total: number;
}

export const initialState: State = {
  currentPage: 1,
  total: 0
};

export function reducer(state = initialState, action: ClientsActionsUnion): State {
  switch (action.type) {
    case ClientsActionTypes.LoadPageSuccess: {
      return {
        ...state,
        currentPage: action.payload.current_page,
        total: action.payload.total
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrentPage = (state: State) => state.currentPage;
export const getTotal = (state: State) => state.total;
