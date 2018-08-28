import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SaleActionsUnion, ProductsActionTypes } from '../actions/products.actions';
import { ProductModel } from '../../../core/models/product.model';

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>({
  selectId: (product: ProductModel) => product.id
});

export interface State extends EntityState<ProductModel> {
  selectedProductId: string | null;
}

export const initialState: State = adapter.getInitialState({
  selectedProductId: null
});

export function reducer(state = initialState, action: SaleActionsUnion): State {
  switch (action.type) {
    case ProductsActionTypes.LoadProductsSuccess: {
      return adapter.addMany(action.payload, state);
    }
    case ProductsActionTypes.Select: {
      return {
        ...state,
        selectedProductId: action.payload
      };
    }
    case ProductsActionTypes.ResetProductsState: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedProductId;
