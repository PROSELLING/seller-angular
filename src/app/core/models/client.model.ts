import { BaseModel } from './base.model';

export interface ClientModel extends BaseModel {
  birthday: string;
  branch: number;
  category: CategoryModel;
  channel: ChannelModel;
  client_contact: ClientContactModel[];
  company: string;
  document_nro: string;
  grossincome: number;
  id_category: number;
  id_channel: number;
  id_client_type: number;
  id_company: number;
  id_document: number;
  id_iva: number;
  id_marital_status: number;
  id_occupation: number;
  id_origin: number;
  id_seller: number;
  id_user: number;
  last_name: string;
  name: string;
  occupation: string;
  origin: OriginModel;
  person_type: string;
  resale: string;
  sex: string;
}

export interface CategoryModel extends BaseModel {
  category: string;
  condition: string;
  icon: string;
}

export interface ChannelModel extends BaseModel {
  channel: string;
  details: string;
  icon: string;
  order: string;
}

export interface ClientContactModel extends BaseModel {
  area_code: string;
  cliend_id: number;
  ext_phone: string;
  id: number;
  id_paises: number;
  id_type_phone: number;
  order: string;
  phone: string;
  wsp: string;
}

export interface OriginModel extends BaseModel {
  id_brand_origin: number;
  id_parent: number;
  order: string;
  origin: string;
}

export interface ClientsResponseModel {
  current_page: number;
  data: ClientModel[];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export interface ClientObjectModel {
  id: string;
  value: string;
}

export interface ClientPayloadModel {
  clients: ClientsResponseModel;
  client_type_phone: ClientObjectModel[];
  origins: ClientObjectModel[];
  channels: ClientObjectModel[];
  documents: ClientObjectModel[];
  marital_status: ClientObjectModel[];
  ocupations: ClientObjectModel[];
  type_locations: ClientObjectModel[];
  client_relations: ClientObjectModel[];
  client_type_mails: ClientObjectModel[];
}
