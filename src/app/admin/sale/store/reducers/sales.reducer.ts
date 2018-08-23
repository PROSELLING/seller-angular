import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SaleActionsUnion, SalesActionTypes } from '../actions/sales.actions';
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
    case SalesActionTypes.LoadSalesSuccess: {
      return adapter.addMany(action.payload, state);
    }
    case SalesActionTypes.Select: {
      return {
        ...state,
        selectedSaleId: action.payload
      };
    }
    case SalesActionTypes.ResetSaleState: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedSaleId;
