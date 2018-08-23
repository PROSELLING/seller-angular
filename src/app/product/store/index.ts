import { ActionReducerMap, createFeatureSelector, createSelector, } from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromProducts from './reducers/products.reducer';
import * as fromProductsMeta from './reducers/products-meta.reducer';

export interface ProductsState {
  products: fromProducts.State;
  productsMeta: fromProductsMeta.State;
}

export interface State extends fromRoot.RootState {
  products: ProductsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  products: fromProducts.reducer,
  productsMeta: fromProductsMeta.reducer,
};

export const selectProductsState = createFeatureSelector<ProductsState>('products');


/** Selectors for Products **/
export const getProductsEntitiesState = createSelector(selectProductsState, state => state.products);

export const getSelectedProductId = createSelector(
  getProductsEntitiesState,
  fromProducts.getSelectedId
);

/** Selectors using NGRX Entity **/
export const {
  selectIds: getProductsIds,
  selectEntities: getProductsEntities,
  selectAll: getAllProducts,
  selectTotal: getTotalProducts,
} = fromProducts.adapter.getSelectors(getProductsEntitiesState);

export const getSelectedProduct = createSelector(
  getProductsEntities,
  getSelectedProductId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

/** Selectors for Sale Metadata **/
export const getProductsMetaState = createSelector(selectProductsState, state => state.productsMeta);

export const getProductsAxis = createSelector(getProductsMetaState, fromProductsMeta.getAxis);

export const getProductsBrands = createSelector(getProductsMetaState, fromProductsMeta.getBrands);

export const getProductsCabines = createSelector(getProductsMetaState, fromProductsMeta.getCabines);

export const getProductsClutches = createSelector(getProductsMetaState, fromProductsMeta.getClutches);

export const getProductsDirections = createSelector(getProductsMetaState, fromProductsMeta.getDirections);

export const getProductsEngines = createSelector(getProductsMetaState, fromProductsMeta.getEngines);

export const getProductsTires = createSelector(getProductsMetaState, fromProductsMeta.getTires);

export const getProductsTractions = createSelector(getProductsMetaState, fromProductsMeta.getTractions);

export const getProductsTransmissions = createSelector(getProductsMetaState, fromProductsMeta.getTransmissions);




