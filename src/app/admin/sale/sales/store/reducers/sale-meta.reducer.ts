import { SaleActionsUnion, SaleActionTypes } from '../actions/sale.actions';
import { ObjectModel } from '../../../../../core/models/meta.model';

export interface State {
  stages: ObjectModel[];
  substages: ObjectModel[];
  task_reasons: ObjectModel[];
  task_results: ObjectModel[];
  type_sales: ObjectModel[];
}

export const initialState: State = {
  stages: [],
  substages: [],
  task_reasons: [],
  task_results: [],
  type_sales: [],
};

export function reducer(state = initialState, action: SaleActionsUnion): State {
  switch (action.type) {
    case SaleActionTypes.LoadMetaSuccess: {
      return {
        ...state,
        stages: action.payload.stages,
        substages: action.payload.substages,
        task_reasons: action.payload.task_reasons,
        task_results: action.payload.task_results,
        type_sales: action.payload.type_sales,
      };
    }
    default: {
      return state;
    }
  }
}

export const getStages = (state: State) => state.stages;
export const getSubstages = (state: State) => state.substages;
export const getTaskReasons = (state: State) => state.task_reasons;
export const getTaskResults = (state: State) => state.task_results;
export const getTypeSales = (state: State) => state.type_sales;
