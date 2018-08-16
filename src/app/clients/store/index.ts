import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromClients from './reducers/clients.reducer';
import * as fromClientsPage from './reducers/clients-page.reducer';
import * as fromSearch from './reducers/search.reducer';
import * as fromClientsMeta from './reducers/clients-meta.reducer';

export interface ClientsState {
  clients: fromClients.State;
  clientsPage: fromClientsPage.State;
  clientsMeta: fromClientsMeta.State;
  search: fromSearch.State;
}

export interface State extends fromRoot.RootState {
  clients: ClientsState;
}

export const reducers: ActionReducerMap<ClientsState> = {
  clients: fromClients.reducer,
  clientsPage: fromClientsPage.reducer,
  clientsMeta: fromClientsMeta.reducer,
  search: fromSearch.reducer,
};

export const selectClientsState = createFeatureSelector<ClientsState>('clients');


/** Selectors for Client **/
export const getClientsEntitiesState = createSelector(selectClientsState, state => state.clients);

export const getSelectedClientId = createSelector(
  getClientsEntitiesState,
  fromClients.getSelectedId
);

/** Selectors using NGRX Entity **/
export const {
  selectIds: getClientIds,
  selectEntities: getClientEntities,
  selectAll: getAllClients,
  selectTotal: getTotalClients,
} = fromClients.adapter.getSelectors(getClientsEntitiesState);

export const getSelectedClient = createSelector(
  getClientEntities,
  getSelectedClientId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);


/** Selectors for Client Page **/
export const getClientsPageEntitiesState = createSelector(selectClientsState, state => state.clientsPage);

/** Get current page **/
export const getCurrentPage = createSelector(getClientsPageEntitiesState, fromClientsPage.getCurrentPage);

/** Get total clients **/
export const getTotal = createSelector(getClientsPageEntitiesState, fromClientsPage.getTotal);


/** Selectors for Client Metadata **/
export const getClientsMetaState = createSelector(selectClientsState, state => state.clientsMeta);

export const getPhoneNumberTypes = createSelector(getClientsMetaState, fromClientsMeta.getPhonNumberTypes);

export const getOrigins = createSelector(getClientsMetaState, fromClientsMeta.getOrigins);

export const getChannels = createSelector(getClientsMetaState, fromClientsMeta.getChannels);

export const getDocuments = createSelector(getClientsMetaState, fromClientsMeta.getDocuments);

export const getMaritalStatus = createSelector(getClientsMetaState, fromClientsMeta.getMaritalStatus);

export const getOccupations = createSelector(getClientsMetaState, fromClientsMeta.getOccupations);

export const getTypeLocations = createSelector(getClientsMetaState, fromClientsMeta.getTypeLocations);

export const getClientRelations = createSelector(getClientsMetaState, fromClientsMeta.getClientRelations);

export const getClientMailTypes = createSelector(getClientsMetaState, fromClientsMeta.getClientMailTypes);

export const getClientGenders = createSelector(getClientsMetaState, fromClientsMeta.getClientGenders);

export const getPersonTypes = createSelector(getClientsMetaState, fromClientsMeta.getPersontypes);

export const getCharges = createSelector(getClientsMetaState, fromClientsMeta.getCharges);

/** Selector for search **/
export const getSearchEntitiesState = createSelector(selectClientsState, state => state.search);

/** Get selected client from search **/
export const getSearchSelectedClient = createSelector(getSearchEntitiesState, fromSearch.getSelectedClient);

