import { LeadsActionsUnion, LeadsActionTypes } from '../actions/leads.actions';
import { LeadObjectModel } from '../../../core/models/lead.model';

export interface State {
  currentPage: number;
  total: number;
  phoneNumberTypes: LeadObjectModel[];
  origins: LeadObjectModel[];
  channels: LeadObjectModel[];
  documents: LeadObjectModel[];
  maritalStatus: LeadObjectModel[];
  occupations: LeadObjectModel[];
  typeLocations: LeadObjectModel[];
  seller_relations: LeadObjectModel[];
  seller_type_mails: LeadObjectModel[];
  genders: LeadObjectModel[];
  person_type: LeadObjectModel[];
  charges: LeadObjectModel[];
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

export function reducer(state = initialState, action: LeadsActionsUnion): State {
  switch (action.type) {
    case LeadsActionTypes.LoadPageSuccess: {
      console.log('TESTING LOAD PAGE', action.payload);
      return {
        ...state,
        currentPage: action.payload.leads.current_page,
        total: action.payload.leads.total,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCurrentPage = (state: State) => state.currentPage;
export const getTotal = (state: State) => state.total;
