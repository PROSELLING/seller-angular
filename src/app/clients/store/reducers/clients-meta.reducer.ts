import { ClientsActionsUnion, ClientsActionTypes } from '../actions/clients.actions';
import { ObjectModel } from '../../../core/models/meta.model';

export interface State {
  categories: ObjectModel[];
  channels: ObjectModel[];
  charges: ObjectModel[];
  client_attitudes: ObjectModel[];
  client_industries: ObjectModel[];
  client_relations: ObjectModel[];
  client_roles: ObjectModel[];
  client_type_mails: ObjectModel[];
  client_type_phone: ObjectModel[];
  client_types: ObjectModel[];
  countries: ObjectModel[];
  countries_code: ObjectModel[];
  documents: ObjectModel[];
  genders: ObjectModel[];
  marital_status: ObjectModel[];
  occupations: ObjectModel[];
  origins: ObjectModel[];
  person_type: ObjectModel[];
  type_locations: ObjectModel[];
}

export const initialState: State = {
  categories: [],
  channels: [],
  charges: [],
  client_attitudes: [],
  client_industries: [],
  client_relations: [],
  client_roles: [],
  client_type_mails: [],
  client_type_phone: [],
  client_types: [],
  countries: [],
  countries_code: [],
  documents: [],
  genders: [],
  marital_status: [],
  occupations: [],
  origins: [],
  person_type: [],
  type_locations: [],
};

export function reducer(state = initialState, action: ClientsActionsUnion): State {
  switch (action.type) {
    case ClientsActionTypes.LoadClientsMetaSuccess: {
      return {
        ...state,
        categories: action.payload.categories,
        channels: action.payload.channels,
        charges: action.payload.charges,
        client_attitudes: action.payload.client_attitudes,
        client_industries: action.payload.client_industries,
        client_relations: action.payload.client_relations,
        client_roles: action.payload.client_roles,
        client_type_mails: action.payload.client_type_mails,
        client_type_phone: action.payload.client_type_phone,
        client_types: action.payload.client_types,
        countries: action.payload.countries,
        countries_code: action.payload.countries_code,
        documents: action.payload.documents,
        genders: action.payload.genders,
        marital_status: action.payload.marital_status,
        occupations: action.payload.occupations,
        origins: action.payload.origins,
        person_type: action.payload.person_type,
        type_locations: action.payload.type_locations,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCategories = (state: State) => state.categories;
export const getChannels = (state: State) => state.channels;
export const getCharges = (state: State) => state.charges;
export const getClientAttitudes = (state: State) => state.client_attitudes;
export const getClientIndustries = (state: State) => state.client_industries;
export const getClientRelations = (state: State) => state.client_relations;
export const getClientRoles = (state: State) => state.client_roles;
export const getClientMailTypes = (state: State) => state.client_type_mails;
export const getPhonNumberTypes = (state: State) => state.client_type_phone;
export const getClientTypes = (state: State) => state.client_types;
export const getCountries = (state: State) => state.countries;
export const getCountriesCode = (state: State) => state.countries_code;
export const getDocuments = (state: State) => state.documents;
export const getClientGenders = (state: State) => state.genders;
export const getMaritalStatus = (state: State) => state.marital_status;
export const getOccupations = (state: State) => state.occupations;
export const getOrigins = (state: State) => state.origins;
export const getPersontypes = (state: State) => state.person_type;
export const getTypeLocations = (state: State) => state.type_locations;
