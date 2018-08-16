import { SellersActionsUnion, SellersActionTypes } from '../actions/sellers.actions';
import { SellerModel } from '../../../core/models/seller.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const adapter: EntityAdapter<SellerModel> = createEntityAdapter<SellerModel>({
  selectId: (seller: SellerModel) => seller.id
});

export interface State extends EntityState<SellerModel> {
  selectedSellerId: string | null;
}

export const initialState: State = adapter.getInitialState({
  selectedSellerId: null
});

export function reducer(state = initialState, action: SellersActionsUnion): State {
  switch (action.type) {
    case SellersActionTypes.LoadSellersSuccess: {
      return adapter.addMany(action.payload, state);
    }
    case SellersActionTypes.Select: {
      return {
        ...state,
        selectedSellerId: action.payload
      };
    }
    case SellersActionTypes.ResetSellerState: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedSellerId;
