import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromClients from './reducers/clients.reducer';
import * as fromClientsPage from './reducers/clients-page.reducer';

export interface ClientsState {
  clients: fromClients.State;
  clientsPage: fromClientsPage.State;
}

export interface State extends fromRoot.RootState {
  clients: ClientsState;
}

export const reducers: ActionReducerMap<ClientsState> = {
  clients: fromClients.reducer,
  clientsPage: fromClientsPage.reducer
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

export const getPhoneNumberTypes = createSelector(getClientsPageEntitiesState, fromClientsPage.getPhonNumberTypes);

export const getOrigins = createSelector(getClientsPageEntitiesState, fromClientsPage.getOrigins);

export const getChannels = createSelector(getClientsPageEntitiesState, fromClientsPage.getChannels);

export const getDocuments = createSelector(getClientsPageEntitiesState, fromClientsPage.getDocuments);

export const getMaritalStatus = createSelector(getClientsPageEntitiesState, fromClientsPage.getMaritalStatus);

export const getOccupations = createSelector(getClientsPageEntitiesState, fromClientsPage.getOccupations);

export const getTypeLocations = createSelector(getClientsPageEntitiesState, fromClientsPage.getTypeLocations);

export const getClientRelations = createSelector(getClientsPageEntitiesState, fromClientsPage.getClientRelations);

export const getClientMailTypes = createSelector(getClientsPageEntitiesState, fromClientsPage.getClientMailTypes);

export const getClientGenders = createSelector(getClientsPageEntitiesState, fromClientsPage.getClientGenders);

export const getPersonTypes = createSelector(getClientsPageEntitiesState, fromClientsPage.getPersontypes);

export const getCharges = createSelector(getClientsPageEntitiesState, fromClientsPage.getCharges);

