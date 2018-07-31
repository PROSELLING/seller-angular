import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../../../core/store/index';
import * as fromSale from './reducers/sale.reducer';
import * as fromSalePage from './reducers/sale-page.reducer';

export interface SaleState {
  sale: fromSale.State;
  salePage: fromSalePage.State;
}

export interface State extends fromRoot.RootState {
  sales: SaleState;
}

export const reducers: ActionReducerMap<SaleState> = {
  sale: fromSale.reducer,
  salePage: fromSalePage.reducer
};

export const selectSaleState = createFeatureSelector<SaleState>('sales');


/** Selectors for Client **/
export const getSaleEntitiesState = createSelector(selectSaleState, state => state.sale);

export const getSelectedSaleId = createSelector(
  getSaleEntitiesState,
  fromSale.getSelectedId
);

/** Selectors using NGRX Entity **/
export const {
  selectIds: getSaleIds,
  selectEntities: getSaleEntities,
  selectAll: getAllSales,
  selectTotal: getTotalSales,
} = fromSale.adapter.getSelectors(getSaleEntitiesState);

export const getSelectedSale = createSelector(
  getSaleEntities,
  getSelectedSaleId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);


/** Selectors for Sale Page **/
export const getSalePageEntitiesState = createSelector(selectSaleState, state => state.salePage);

/** Get current page **/
export const getCurrentPage = createSelector(getSalePageEntitiesState, fromSalePage.getCurrentPage);

/** Get total sales **/
export const getTotal = createSelector(getSalePageEntitiesState, fromSalePage.getTotal);

