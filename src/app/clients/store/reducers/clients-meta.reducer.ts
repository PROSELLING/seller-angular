import { ClientsActionsUnion, ClientsActionTypes } from '../actions/clients.actions';
import { ObjectModel } from '../../../core/models/meta.model';

export interface State {
  phoneNumberTypes: ObjectModel[];
  origins: ObjectModel[];
  channels: ObjectModel[];
  documents: ObjectModel[];
  maritalStatus: ObjectModel[];
  occupations: ObjectModel[];
  typeLocations: ObjectModel[];
  client_relations: ObjectModel[];
  client_type_mails: ObjectModel[];
  genders: ObjectModel[];
  person_type: ObjectModel[];
  charges: ObjectModel[];
}

export const initialState: State = {
  phoneNumberTypes: [],
  origins: [],
  channels: [],
  documents: [],
  maritalStatus: [],
  occupations: [],
  typeLocations: [],
  client_relations: [],
  client_type_mails: [],
  genders: [],
  person_type: [],
  charges: [],
};

export function reducer(state = initialState, action: ClientsActionsUnion): State {
  switch (action.type) {
    case ClientsActionTypes.LoadClientsMetaSuccess: {
      return {
        ...state,
        phoneNumberTypes: action.payload.client_type_phone,
        origins: action.payload.origins,
        channels: action.payload.channels,
        documents: action.payload.documents,
        maritalStatus: action.payload.marital_status,
        occupations: action.payload.ocupations,
        typeLocations: action.payload.type_locations,
        client_relations: action.payload.client_relations,
        client_type_mails: action.payload.client_type_mails,
        genders: action.payload.genders,
        person_type: action.payload.person_type,
        charges: action.payload.charges,
      };
    }
    default: {
      return state;
    }
  }
}

export const getPhonNumberTypes = (state: State) => state.phoneNumberTypes;
export const getOrigins = (state: State) => state.origins;
export const getChannels = (state: State) => state.channels;
export const getDocuments = (state: State) => state.documents;
export const getMaritalStatus = (state: State) => state.maritalStatus;
export const getOccupations = (state: State) => state.occupations;
export const getTypeLocations = (state: State) => state.typeLocations;
export const getClientRelations = (state: State) => state.client_relations;
export const getClientMailTypes = (state: State) => state.client_type_mails;
export const getClientGenders = (state: State) => state.genders;
export const getPersontypes = (state: State) => state.person_type;
export const getCharges = (state: State) => state.charges;
