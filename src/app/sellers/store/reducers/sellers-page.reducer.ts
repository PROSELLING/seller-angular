import { SellersActionsUnion, SellersActionTypes } from '../actions/sellers.actions';
import { SellerObjectModel } from '../../../core/models/seller.model';

export interface State {
  currentPage: number;
  total: number;
  client_type_phone: SellerObjectModel[];
  origins: SellerObjectModel[];
  channels: SellerObjectModel[];
  documents: SellerObjectModel[];
  maritalStatus: SellerObjectModel[];
  occupations: SellerObjectModel[];
  type_locations: SellerObjectModel[];
  seller_relations: SellerObjectModel[];
  seller_type_mails: SellerObjectModel[];
  genders: SellerObjectModel[];
  person_type: SellerObjectModel[];
  charges: SellerObjectModel[];
}

export const initialState: State = {
  currentPage: 1,
  total: 0,
  client_type_phone: [],
  origins: [],
  channels: [],
  documents: [],
  maritalStatus: [],
  occupations: [],
  type_locations: [],
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
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrentPage = (state: State) => state.currentPage;
export const getTotal = (state: State) => state.total;
