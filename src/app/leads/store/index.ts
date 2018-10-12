import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../core/store/index';
import * as fromLeads from './reducers/leads.reducers'; // se difine de cuál store se trae toda la información
import * as fromLeadsPage from './reducers/leads-page.reducer';

export interface LeadsState {
  leads: fromLeads.State;
  leadsPage: fromLeadsPage.State;
}

export interface State extends fromRoot.RootState {
  leads: LeadsState;
}

export const reducersLeads: ActionReducerMap<LeadsState> = {
  leads: fromLeads.reducer,
  leadsPage: fromLeadsPage.reducer

};

export const selectLeadsState = createFeatureSelector<LeadsState>('leads');


/** Selectors for Leads **/
export const getLeadsEntitiesState = createSelector(selectLeadsState, state => state.leads);

export const getSelectedLeadId = createSelector(
  getLeadsEntitiesState,
  fromLeads.getSelectedId
);

/** Selectors using NGRX Entity **/
export const {
  selectIds: getLeadIds,
  selectEntities: getLeadEntities,
  selectAll: getAllLeads,
  selectTotal: getTotalLeads,
} = fromLeads.adapter.getSelectors(getLeadsEntitiesState);

export const getSelectedLead = createSelector(
  getLeadEntities,
  getSelectedLeadId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);


/** Selectors for Seller Page **/
export const getLeadsPageEntitiesState = createSelector(selectLeadsState, state => state.leadsPage);

/** Get current page **/
export const getCurrentPage = createSelector(getLeadsPageEntitiesState, fromLeadsPage.getCurrentPage);

/** Get total sellers **/
export const getTotal = createSelector(getLeadsPageEntitiesState, fromLeadsPage.getTotal);
