import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../../core/store/index';
import * as fromSale from './reducers/sales.reducer';
import * as fromSalePage from './reducers/sales-page.reducer';
import * as fromSaleMeta from './reducers/sales-meta.reducer';

export interface SaleState {
  sale: fromSale.State;
  salePage: fromSalePage.State;
  saleMeta: fromSaleMeta.State;
}

export interface State extends fromRoot.RootState {
  sales: SaleState;
}

export const reducers: ActionReducerMap<SaleState> = {
  sale: fromSale.reducer,
  salePage: fromSalePage.reducer,
  saleMeta: fromSaleMeta.reducer
};

export const selectSaleState = createFeatureSelector<SaleState>('sales');


/** Selectors for Client **/
export const getSalesEntitiesState = createSelector(selectSaleState, state => state.sale);

export const getSelectedSaleId = createSelector(
  getSalesEntitiesState,
  fromSale.getSelectedId
);

/** Selectors using NGRX Entity **/
export const {
  selectIds: getSalesIds,
  selectEntities: getSalesEntities,
  selectAll: getAllSales,
  selectTotal: getTotalSales,
} = fromSale.adapter.getSelectors(getSalesEntitiesState);

export const getSelectedSale = createSelector(
  getSalesEntities,
  getSelectedSaleId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);


/** Selectors for Sale Page **/
export const getSalesPageEntitiesState = createSelector(selectSaleState, state => state.salePage);

/** Get current page **/
export const getCurrentPage = createSelector(getSalesPageEntitiesState, fromSalePage.getCurrentPage);

/** Get total sales-list **/
export const getTotal = createSelector(getSalesPageEntitiesState, fromSalePage.getTotal);

/** Selectors for Sale Metadata **/
export const getSalesMetaState = createSelector(selectSaleState, state => state.saleMeta);

export const getSalesCompanies = createSelector(getSalesMetaState, fromSaleMeta.getCompanies);

export const getSalesInsurances = createSelector(getSalesMetaState, fromSaleMeta.getInsurances);

export const getSalesIvaConditions = createSelector(getSalesMetaState, fromSaleMeta.getIvaConditions);

export const getSalesNonPurchaseReasons = createSelector(getSalesMetaState, fromSaleMeta.getNonPurchaseReasons);

export const getSalesStatus = createSelector(getSalesMetaState, fromSaleMeta.getSalesStatus);

export const getSalesStages = createSelector(getSalesMetaState, fromSaleMeta.getStages);

export const getSalesSubstages = createSelector(getSalesMetaState, fromSaleMeta.getSubstages);

export const getSalesTaskReasons = createSelector(getSalesMetaState, fromSaleMeta.getTaskReasons);

export const getSalesTaskResults = createSelector(getSalesMetaState, fromSaleMeta.getTaskResults);

export const getSalesTypeDeliveries = createSelector(getSalesMetaState, fromSaleMeta.getTypeDeliveries);

export const getSalesTypeInvoices = createSelector(getSalesMetaState, fromSaleMeta.getTypeInvoices);

export const getSalesTypePlans = createSelector(getSalesMetaState, fromSaleMeta.getTypePlans);

export const getSalesTypeSales = createSelector(getSalesMetaState, fromSaleMeta.getTypeSales);




