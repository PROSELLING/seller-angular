import { ClientModel } from './client.model';
import { BaseModel } from './base.model';
import { ObjectModel, ResponseModel } from './meta.model';

export interface SaleModel extends BaseModel {
  attend: string;
  client: ClientModel;
  estado: string;
  id_budget_old: number;
  id_client: number;
  id_condition_iva: number;
  id_non_purchase_reasons: number;
  id_seguro: number;
  id_stage: number;
  id_type_delivery: number;
  id_type_invoice: number;
  id_type_payment: number;
  id_type_plan: number;
  id_type_sale: number;
  id_user: number;
  observation: string;
  reply_hub: string;
  reply_hub_date: string;
  sent_hub: number;
  total: number;
}

export interface SaleResponseModel extends ResponseModel {
  data: SaleModel[];
}

export interface SalePayloadModel {
  sales: SaleResponseModel;
}

export interface SaleMetaResponseModel {
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
