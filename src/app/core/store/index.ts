import * as fromLayout from './reducers/layout.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface RootState {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<RootState> = {
  layout: fromLayout.reducer
};

/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
