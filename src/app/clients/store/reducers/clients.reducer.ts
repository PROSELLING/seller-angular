import { ClientsActionsUnion, ClientsActionTypes } from '../actions/clients.actions';
import { ClientModel } from '../../../core/models/client.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<ClientModel> = createEntityAdapter<ClientModel>({
  selectId: (client: ClientModel) => client.id
});

export interface State extends EntityState<ClientModel> {
  selectedClientId: string | null;
}

export const initialState: State = adapter.getInitialState({
  selectedClientId: null
});

export function reducer(state = initialState, action: ClientsActionsUnion): State {
  switch (action.type) {
    case ClientsActionTypes.LoadClientsSuccess: {
      return adapter.addMany(action.payload, state);
    }
    case ClientsActionTypes.Select: {
      console.log('Select action', action.payload);
      return {
        ...state,
        selectedClientId: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedClientId;
