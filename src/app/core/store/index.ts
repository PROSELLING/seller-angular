import * as fromLayout from './reducers/layout.reducer';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync} from 'ngrx-store-localstorage';

export interface RootState {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<RootState> = {
  layout: fromLayout.reducer
};

/**
 * By default, @ngrx/store only writes to memory. We use ngrx-store-localstorage
 * to persist the states to the browser's storage to avoid losing them on page reload
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys: ['layout', 'auth', 'clients'],
      rehydrate: true
    }
    )(reducer);
}

// console.log all actions
export function logger(reducer: ActionReducer<RootState>): ActionReducer<RootState> {
  return function(state: RootState, action: any): RootState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];


/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
export const getShowRightSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowRightSidenav
);

export const getMenuColor = createSelector(
  getLayoutState,
  fromLayout.getMenuColor
);
