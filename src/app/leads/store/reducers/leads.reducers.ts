import { LeadsActionsUnion, LeadsActionTypes } from '../actions/leads.actions';
import { LeadModel } from '../../../core/models/lead.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export const adapter: EntityAdapter<LeadModel> = createEntityAdapter<LeadModel>({
  selectId: (lead: LeadModel) => lead.id
});

export interface State extends EntityState<LeadModel> {
  selectedLeadId: string | null;
}

export const initialState: State = adapter.getInitialState({
  selectedLeadId: null
});

export function reducer(state = initialState, action: LeadsActionsUnion): State {
  switch (action.type) {
    case LeadsActionTypes.LoadLeadsSuccess: {
      return adapter.addMany(action.payload, state);
    }    
    case LeadsActionTypes.Select: {
      return {
        ...state,
        selectedLeadId: action.payload
      };
    }
    case LeadsActionTypes.ResetLeadState: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedLeadId;

