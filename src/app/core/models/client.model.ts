import { BaseModel } from './base.model';
import { ClientMetaModel, ResponseModel } from './meta.model';

export interface ClientModel extends BaseModel {
  birthday: string;
  branch: number;
  category: CategoryModel;
  channel: ChannelModel;
  client_address: ClientAddresstModel[];
  client_contact: ClientContactModel[];
  client_mails: ClientEmailModel[];
  client_networks: SocialNetworkModel[];
  company: string;
  document_nro: string;
  grossincome: number;
  id_category: number;
  id_channel: number;
  id_charge: number;
  id_client_type: number;
  id_company: number;
  id_document: number;
  id_industry: number;
  id_gender: number;
  id_iva: number;
  id_maritals_status: number;
  id_occupation: number;
  id_origin: number;
  id_seller: number;
  id_user: number;
  last_name: string;
  name: string;
  occupation: string;
  origin: OriginModel;
  person_type: string;
  photo: string;
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

export interface ClientEmailModel extends BaseModel {
  client_id: number;
  id: number;
  id_type_mail: number;
  mail: string;
  principal: number;
}

export interface ClientContactModel extends BaseModel {
  area_code: number;
  cliend_id: number;
  ext_phone: string;
  id: number;
  id_paises: number;
  id_type_phone: number;
  order: string;
  phone: string;
  wsp: string;
}
export interface ClientAddresstModel extends BaseModel {
  cliend_id: number;
  department: string;
  district: string;
  floor: string;
  google_place_id: string;
  id: number;
  id_locality: number;
  id_type: number;
  latitud: string;
  longitude: string;
  number: string;
  street: string;
  zipcode: string;
}

export interface OriginModel extends BaseModel {
  id_brand_origin: number;
  id_parent: number;
  order: string;
  origin: string;
}

export interface SocialNetworkModel extends BaseModel {
  facebook: string;
  google: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

export interface ClientsResponseModel extends ResponseModel {
  data: ClientModel[];
}

export interface ClientPayloadModel {
  clients: ClientsResponseModel;
}

export interface ClientResponseModel {
  client: ClientModel;
}
