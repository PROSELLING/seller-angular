import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromSellers from './reducers/sellers.reducer';
import * as fromSellersPage from './reducers/sellers-page.reducer';

export interface SellersState {
  sellers: fromSellers.State;
  sellersPage: fromSellersPage.State;
}

export interface State extends fromRoot.RootState {
  sellers: SellersState;
}

export const reducers: ActionReducerMap<SellersState> = {
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

export const getPhoneNumberTypes = createSelector(getSellersPageEntitiesState, fromSellersPage.getPhonNumberTypes);

export const getOrigins = createSelector(getSellersPageEntitiesState, fromSellersPage.getOrigins);

export const getChannels = createSelector(getSellersPageEntitiesState, fromSellersPage.getChannels);

export const getDocuments = createSelector(getSellersPageEntitiesState, fromSellersPage.getDocuments);

export const getMaritalStatus = createSelector(getSellersPageEntitiesState, fromSellersPage.getMaritalStatus);

export const getOccupations = createSelector(getSellersPageEntitiesState, fromSellersPage.getOccupations);

export const getTypeLocations = createSelector(getSellersPageEntitiesState, fromSellersPage.getTypeLocations);

export const getSellerRelations = createSelector(getSellersPageEntitiesState, fromSellersPage.getSellerRelations);

export const getSellerMailTypes = createSelector(getSellersPageEntitiesState, fromSellersPage.getSellerMailTypes);

export const getSellerGenders = createSelector(getSellersPageEntitiesState, fromSellersPage.getSellerGenders);

export const getPersonTypes = createSelector(getSellersPageEntitiesState, fromSellersPage.getPersontypes);

export const getCharges = createSelector(getSellersPageEntitiesState, fromSellersPage.getCharges);

