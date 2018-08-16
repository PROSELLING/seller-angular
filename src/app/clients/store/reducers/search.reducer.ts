import { ClientModel } from '../../../core/models/client.model';
import { ClientsActionsUnion, ClientsActionTypes } from '../actions/clients.actions';

export interface State {
  selectedClient: ClientModel | null;
}

export const initialState: State = {
  selectedClient: null,
};

export function reducer(state = initialState, action: ClientsActionsUnion): State {
  switch (action.type) {
    case ClientsActionTypes.SelectedSearchClient: {
      return {
        ...state,
        selectedClient: action.payload
      };
    }
    case ClientsActionTypes.ResetClientState: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getSelectedClient = (state: State) => state.selectedClient;
