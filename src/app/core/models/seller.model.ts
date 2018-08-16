import { BaseModel } from './base.model';

export interface SellerModel extends BaseModel {
  birthday: string;
  cellphone: string;
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  id_company: number;
  phone: string;
}

export interface SellersResponseModel {
  current_page: number;
  data: SellerModel[];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export interface Company extends BaseModel {
  cuit: string;
  database_name: string;
  database_pass: string;
  database_user: string;
  direccion: string;
}

export interface SellerObjectModel {
  id: string;
  value: string;
}

export interface SellerPayloadModel {
  sellers: SellersResponseModel;
}
