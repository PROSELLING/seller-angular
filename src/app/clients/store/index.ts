import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromClients from './reducers/clients.reducer';

export interface ClientsState {
  clients: fromClients.State;
}

export interface State extends fromRoot.RootState {
  clients: ClientsState;
}

export const reducers: ActionReducerMap<ClientsState> = {
  clients: fromClients.reducer,
};

export const selectClientsState = createFeatureSelector<ClientsState>('clients');



export const getClientsEntitiesState = createSelector(selectClientsState, state => state.clients);

/** Get client array **/
export const getClients = createSelector(getClientsEntitiesState, fromClients.getClients);

/** Get current page **/
export const getCurrentPage = createSelector(getClientsEntitiesState, fromClients.getCurrentPage);

/** Get total clients **/
export const getTotal = createSelector(getClientsEntitiesState, fromClients.getTotal);

