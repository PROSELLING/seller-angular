import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromSellers from './reducers/sellers.reducer'; // se difine de cuál store se trae toda la información
import * as fromSellersPage from './reducers/sellers-page.reducer';

export interface SellersState {
  sellers: fromSellers.State;
  sellersPage: fromSellersPage.State;
}

export interface State extends fromRoot.RootState {
  sellers: SellersState;
}

export const reducersSellers: ActionReducerMap<SellersState> = {
  sellers: fromSellers.reducer,
  sellersPage: fromSellersPage.reducer
};

export const selectSellersState = createFeatureSelector<SellersState>('sellers');


/** Selectors for Seller **/
export const getSellersEntitiesState = createSelector(selectSellersState, state => state.sellers);

export const getSelectedSellerId = createSelector(
  getSellersEntitiesState,
  fromSellers.getSelectedId
);

/** Selectors using NGRX Entity **/
export const {
  selectIds: getSellerIds,
  selectEntities: getSellerEntities,
  selectAll: getAllSellers,
  selectTotal: getTotalSellers,
} = fromSellers.adapter.getSelectors(getSellersEntitiesState);

export const getSelectedSeller = createSelector(
  getSellerEntities,
  getSelectedSellerId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);


/** Selectors for Seller Page **/
export const getSellersPageEntitiesState = createSelector(selectSellersState, state => state.sellersPage);

/** Get current page **/
export const getCurrentPage = createSelector(getSellersPageEntitiesState, fromSellersPage.getCurrentPage);

/** Get total sellers **/
export const getTotal = createSelector(getSellersPageEntitiesState, fromSellersPage.getTotal);
