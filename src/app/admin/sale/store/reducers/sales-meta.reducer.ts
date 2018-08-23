import { SaleActionsUnion, SaleActionTypes } from '../actions/sales.actions';
import { ObjectModel } from '../../../../core/models/meta.model';

export interface State {
  companies: ObjectModel[];
  insurances: ObjectModel[];
  iva_conditions: ObjectModel[];
  non_purchase_reasons: ObjectModel[];
  sale_status: ObjectModel[];
  stages: ObjectModel[];
  substages: ObjectModel[];
  task_reasons: ObjectModel[];
  task_results: ObjectModel[];
  type_deliveries: ObjectModel[];
  type_invoices: ObjectModel[];
  type_payments: ObjectModel[];
  type_plans: ObjectModel[];
  type_sales: ObjectModel[];
}

export const initialState: State = {
  companies: [],
  insurances: [],
  iva_conditions: [],
  non_purchase_reasons: [],
  sale_status: [],
  stages: [],
  substages: [],
  task_reasons: [],
  task_results: [],
  type_deliveries: [],
  type_invoices: [],
  type_payments: [],
  type_plans: [],
  type_sales: [],
};

export function reducer(state = initialState, action: SaleActionsUnion): State {
  switch (action.type) {
    case SaleActionTypes.LoadMetaSuccess: {
      return {
        ...state,
        companies: action.payload.companies,
        insurances: action.payload.insurances,
        iva_conditions: action.payload.iva_conditions,
        non_purchase_reasons: action.payload.non_purchase_reasons,
        sale_status: action.payload.sale_status,
        stages: action.payload.stages,
        substages: action.payload.substages,
        task_reasons: action.payload.task_reasons,
        task_results: action.payload.task_results,
        type_deliveries: action.payload.type_deliveries,
        type_invoices: action.payload.type_invoices,
        type_payments: action.payload.type_payments,
        type_plans: action.payload.type_plans,
        type_sales: action.payload.type_sales,
      };
    }
    default: {
      return state;
    }
  }
}

export const getCompanies = (state: State) => state.companies;
export const getInsurances = (state: State) => state.insurances;
export const getIvaConditions = (state: State) => state.iva_conditions;
export const getNonPurchaseReasons = (state: State) => state.non_purchase_reasons;
export const getSaleStatus = (state: State) => state.sale_status;
export const getStages = (state: State) => state.stages;
export const getSubstages = (state: State) => state.substages;
export const getTaskReasons = (state: State) => state.task_reasons;
export const getTaskResults = (state: State) => state.task_results;
export const getTypeDeliveries = (state: State) => state.type_deliveries;
export const getTypeInvoices = (state: State) => state.type_invoices;
export const getTypePlans = (state: State) => state.type_plans;
export const getTypeSales = (state: State) => state.type_sales;
