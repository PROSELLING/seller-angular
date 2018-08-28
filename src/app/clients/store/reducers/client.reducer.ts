import { ClientModel } from '../../../core/models/client.model';
import { ClientActionsUnion, ClientActionTypes } from '../actions/client.actions';
import { ObjectModel } from '../../../core/models/meta.model';

export interface State {
  selectedClient: ClientModel | null;
  clientOrigin: ObjectModel[] | null;
}

export const initialState: State = {
  selectedClient: null,
  clientOrigin: null,
};

export function reducer(state = initialState, action: ClientActionsUnion): State {
  switch (action.type) {
    case ClientActionTypes.Load: {
      return {
        ...state,
        selectedClient: action.payload
      };
    }
    case ClientActionTypes.Select: {
      return initialState;
    }
    case ClientActionTypes.LoadOriginSuccess: {
      return {
        ...state,
        clientOrigin: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getSelectedClient = (state: State) => state.selectedClient;
export const getClientOrigin = (state: State) => state.clientOrigin;
