import { ClientsActionsUnion, ClientsActionTypes } from '../actions/clients.actions';
import { ClientObjectModel } from '../../../core/models/client.model';

export interface State {
  currentPage: number;
  total: number;
  phoneNumberTypes: ClientObjectModel[];
  origins: ClientObjectModel[];
  channels: ClientObjectModel[];
  documents: ClientObjectModel[];
  maritalStatus: ClientObjectModel[];
  occupations: ClientObjectModel[];
  typeLocations: ClientObjectModel[];
  client_relations: ClientObjectModel[];
  client_type_mails: ClientObjectModel[];
}

export const initialState: State = {
  currentPage: 1,
  total: 0,
  phoneNumberTypes: [],
  origins: [],
  channels: [],
  documents: [],
  maritalStatus: [],
  occupations: [],
  typeLocations: [],
  client_relations: [],
  client_type_mails: [],
};

export function reducer(state = initialState, action: ClientsActionsUnion): State {
  switch (action.type) {
    case ClientsActionTypes.LoadPageSuccess: {
      console.log('TESTING LOAD PAGE', action.payload);
      return {
        ...state,
        currentPage: action.payload.clients.current_page,
        total: action.payload.clients.total,
        phoneNumberTypes: action.payload.client_type_phone,
        origins: action.payload.origins,
        channels: action.payload.channels,
        documents: action.payload.documents,
        maritalStatus: action.payload.marital_status,
        occupations: action.payload.ocupations,
        typeLocations: action.payload.type_locations,
        client_relations: action.payload.client_relations,
        client_type_mails: action.payload.client_type_mails,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrentPage = (state: State) => state.currentPage;
export const getTotal = (state: State) => state.total;
export const getPhonNumberTypes = (state: State) => state.phoneNumberTypes;
export const getOrigins = (state: State) => state.origins;
export const getChannels = (state: State) => state.channels;
export const getDocuments = (state: State) => state.documents;
export const getMaritalStatus = (state: State) => state.maritalStatus;
export const getOccupations = (state: State) => state.occupations;
export const getTypeLocations = (state: State) => state.typeLocations;
export const getClientRelations = (state: State) => state.client_relations;
export const getClientMailTypes = (state: State) => state.client_type_mails;
