import { SellersActionsUnion, SellersActionTypes } from '../actions/sellers.actions';
import { SellerObjectModel } from '../../../core/models/seller.model';

export interface State {
  currentPage: number;
  total: number;
  phoneNumberTypes: SellerObjectModel[];
  origins: SellerObjectModel[];
  channels: SellerObjectModel[];
  documents: SellerObjectModel[];
  maritalStatus: SellerObjectModel[];
  occupations: SellerObjectModel[];
  typeLocations: SellerObjectModel[];
  seller_relations: SellerObjectModel[];
  seller_type_mails: SellerObjectModel[];
  genders: SellerObjectModel[];
  person_type: SellerObjectModel[];
  charges: SellerObjectModel[];
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
  seller_relations: [],
  seller_type_mails: [],
  genders: [],
  person_type: [],
  charges: [],
};

export function reducer(state = initialState, action: SellersActionsUnion): State {
  switch (action.type) {
    case SellersActionTypes.LoadPageSuccess: {
      console.log('TESTING LOAD PAGE', action.payload);
      return {
        ...state,
        currentPage: action.payload.sellers.current_page,
        total: action.payload.sellers.total,
        phoneNumberTypes: action.payload.seller_type_phone,
        origins: action.payload.origins,
        channels: action.payload.channels,
        documents: action.payload.documents,
        maritalStatus: action.payload.marital_status,
        occupations: action.payload.ocupations,
        typeLocations: action.payload.type_locations,
        seller_relations: action.payload.seller_relations,
        seller_type_mails: action.payload.seller_type_mails,
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

export const getCurrentPage = (state: State) => state.currentPage;
export const getTotal = (state: State) => state.total;
export const getPhonNumberTypes = (state: State) => state.phoneNumberTypes;
export const getOrigins = (state: State) => state.origins;
export const getChannels = (state: State) => state.channels;
export const getDocuments = (state: State) => state.documents;
export const getMaritalStatus = (state: State) => state.maritalStatus;
export const getOccupations = (state: State) => state.occupations;
export const getTypeLocations = (state: State) => state.typeLocations;
export const getSellerRelations = (state: State) => state.seller_relations;
export const getSellerMailTypes = (state: State) => state.seller_type_mails;
export const getSellerGenders = (state: State) => state.genders;
export const getPersontypes = (state: State) => state.person_type;
export const getCharges = (state: State) => state.charges;
