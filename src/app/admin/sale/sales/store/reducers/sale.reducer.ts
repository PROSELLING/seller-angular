import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SaleActionsUnion, SaleActionTypes } from '../actions/sale.actions';

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (client: any) => client.id
});

export interface State extends EntityState<any> {
  selectedClientId: string | null;
}

export const initialState: State = adapter.getInitialState({
  selectedClientId: null
});

export function reducer(state = initialState, action: SaleActionsUnion): State {
  switch (action.type) {
    case SaleActionTypes.LoadSaleSuccess: {
      return adapter.addMany(action.payload, state);
    }
    case SaleActionTypes.Select: {
      return {
        ...state,
        selectedClientId: action.payload
      };
    }
    case SaleActionTypes.ResetSaleState: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedClientId;
