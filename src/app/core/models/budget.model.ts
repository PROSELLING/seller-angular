import { BaseModel } from './base.model';

export interface BudgetModel extends BaseModel {
  discount_admin: string;
  discount_max: string;
  discount_price: string;
  id_budget: number;
  id_car_use: number;
  id_paint: number;
  id_product: number;
  id_product_want: number;
  id_type_plan: number;
  observation: string;
  patenting: number;
  price: string;
  price_factory: string;
  printed_at: string;
  promotion: string;
  quantity: number;
  status_product: number;
  subtotal: string;
}
