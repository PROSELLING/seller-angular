import { ClientsActionsUnion, ClientsActionTypes } from '../actions/clients.actions';
import { ClientModel } from '../../../core/models/client.model';

export interface State {
  clients: ClientModel[];
  currentPage: number;
  total: number;
}

export const initialState: State = {
  clients: [],
  currentPage: 1,
  total: 0
};

export function reducer(state = initialState, action: ClientsActionsUnion): State {
  switch (action.type) {
    case ClientsActionTypes.LoadSuccess: {
      return {
        ...state,
        clients: action.payload.data,
        currentPage: action.payload.current_page,
        total: action.payload.total
      };
    }
    default: {
      return state;
    }
  }
}

export const getClients = (state: State) => state.clients;
export const getCurrentPage = (state: State) => state.currentPage;
export const getTotal = (state: State) => state.total;
