import { ClientModel } from '../../../core/models/client.model';
import { ClientActionsUnion, ClientActionTypes } from '../actions/client.actions';

export interface State {
  selectedClient: ClientModel | null;
}

export const initialState: State = {
  selectedClient: null,
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
    default: {
      return state;
    }
  }
}

export const getSelectedClient = (state: State) => state.selectedClient;
