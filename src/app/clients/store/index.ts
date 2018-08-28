import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromClient from './reducers/client.reducer';
import * as fromClients from './reducers/clients.reducer';
import * as fromClientsPage from './reducers/clients-page.reducer';
import * as fromSearch from './reducers/search.reducer';
import * as fromClientsMeta from './reducers/clients-meta.reducer';

export interface ClientsState {
  client: fromClient.State;
  clients: fromClients.State;
  clientsPage: fromClientsPage.State;
  clientsMeta: fromClientsMeta.State;
  search: fromSearch.State;
}

export interface State extends fromRoot.RootState {
  clients: ClientsState;
}

export const reducers: ActionReducerMap<ClientsState> = {
  client: fromClient.reducer,
  clients: fromClients.reducer,
  clientsPage: fromClientsPage.reducer,
  clientsMeta: fromClientsMeta.reducer,
  search: fromSearch.reducer,
};

export const selectClientsState = createFeatureSelector<ClientsState>('clients');


/** Selectors for Client **/
export const getClientEntitiesState = createSelector(selectClientsState, state => state.client);

export const getClientOrigin = createSelector(getClientEntitiesState, fromClient.getClientOrigin);


/** Selectors for Clients **/
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

export const getCategories = createSelector(getClientsMetaState, fromClientsMeta.getCategories);
export const getCategory = (id: number) => createSelector(getCategories, categories => categories.filter(category => category.id === id));

export const getChannels = createSelector(getClientsMetaState, fromClientsMeta.getChannels);

export const getCharges = createSelector(getClientsMetaState, fromClientsMeta.getCharges);
export const getCharge = (id: number) => createSelector(getCharges, charges => charges.filter(charge => charge.id === id));

export const getClientAttitudes = createSelector(getClientsMetaState, fromClientsMeta.getClientAttitudes);

export const getClientIndustries = createSelector(getClientsMetaState, fromClientsMeta.getClientIndustries);
export const getClientIndustry = (id: number) => createSelector(getClientIndustries, industries => industries.filter(industry => industry.id === id));

export const getClientRelations = createSelector(getClientsMetaState, fromClientsMeta.getClientRelations);

export const getClientRoles = createSelector(getClientsMetaState, fromClientsMeta.getClientRoles);

export const getClientMailTypes = createSelector(getClientsMetaState, fromClientsMeta.getClientMailTypes);

export const getClientTypes = createSelector(getClientsMetaState, fromClientsMeta.getClientTypes);

export const getCountries = createSelector(getClientsMetaState, fromClientsMeta.getCountries);

export const getCountriesCode = createSelector(getClientsMetaState, fromClientsMeta.getCountriesCode);
export const getCountriesCodeValue = (id: number) => createSelector(getCountriesCode, countriesCodes => countriesCodes.filter(countryCode => countryCode.id === id));

export const getPhoneNumberTypes = createSelector(getClientsMetaState, fromClientsMeta.getPhonNumberTypes);

export const getDocuments = createSelector(getClientsMetaState, fromClientsMeta.getDocuments);

export const getEmpathies = createSelector(getClientsMetaState, fromClientsMeta.getEmpathies);
export const getEmpathy = (id: number) => createSelector(getEmpathies, empathies => empathies.filter(empathy => empathy.id === id));

export const getMaritalStatus = createSelector(getClientsMetaState, fromClientsMeta.getMaritalStatus);
export const getMaritalStatusValue = (id: number) => createSelector(getMaritalStatus, maritalStatuses => maritalStatuses.filter(maritalStatus => maritalStatus.id === id));

export const getOrigins = createSelector(getClientsMetaState, fromClientsMeta.getOrigins);

export const getOccupations = createSelector(getClientsMetaState, fromClientsMeta.getOccupations);
export const getOccupation = (id: number) => createSelector(getOccupations, occupations => occupations.filter(occupation => occupation.id === id));

export const getTypeLocations = createSelector(getClientsMetaState, fromClientsMeta.getTypeLocations);
export const getTypeLocation = (id: number) => createSelector(getTypeLocations, typeLocations => typeLocations.filter(typeLocation => typeLocation.id === id));

export const getClientGenders = createSelector(getClientsMetaState, fromClientsMeta.getClientGenders);

export const getPersonTypes = createSelector(getClientsMetaState, fromClientsMeta.getPersontypes);

/** Selector for search **/
export const getSearchEntitiesState = createSelector(selectClientsState, state => state.search);

/** Get selected client from search **/
export const getSearchSelectedClient = createSelector(getSearchEntitiesState, fromSearch.getSelectedClient);

