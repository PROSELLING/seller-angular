import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SaleActionsUnion, SaleActionTypes } from '../actions/sale.actions';
import { SaleModel } from '../../../../core/models/sale.model';

export const adapter: EntityAdapter<SaleModel> = createEntityAdapter<SaleModel>({
  selectId: (sale: SaleModel) => sale.id
});

export interface State extends EntityState<SaleModel> {
  selectedSaleId: string | null;
}

export const initialState: State = adapter.getInitialState({
  selectedSaleId: null
});

export function reducer(state = initialState, action: SaleActionsUnion): State {
  switch (action.type) {
    case SaleActionTypes.LoadSaleSuccess: {
      return adapter.addMany(action.payload, state);
    }
    case SaleActionTypes.Select: {
      return {
        ...state,
        selectedSaleId: action.payload
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

export const getSelectedId = (state: State) => state.selectedSaleId;
