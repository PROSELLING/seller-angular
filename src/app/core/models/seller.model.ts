import { BaseModel } from './base.model';

export interface SellerModel extends BaseModel {
  birthday: string;
  branch: number;
  category: CategoryModel;
  channel: ChannelModel;
  seller_contact: SellerContactModel[];
  seller_mails: SellerEmailModel[];
  seller_networks: SocialNetworkModel[];
  company: string;
  document_nro: string;
  grossincome: number;
  id_category: number;
  id_channel: number;
  id_charge: number;
  id_seller_type: number;
  id_company: number;
  id_document: number;
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

export interface SellerEmailModel extends BaseModel {
  seller_id: number;
  id: number;
  id_type_mail: number;
  mail: string;
  principal: number;
}

export interface SellerContactModel extends BaseModel {
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
  seller_type_phone: SellerObjectModel[];
  origins: SellerObjectModel[];
  channels: SellerObjectModel[];
  documents: SellerObjectModel[];
  marital_status: SellerObjectModel[];
  ocupations: SellerObjectModel[];
  type_locations: SellerObjectModel[];
  seller_relations: SellerObjectModel[];
  seller_type_mails: SellerObjectModel[];
  genders: SellerObjectModel[];
  person_type: SellerObjectModel[];
  charges: SellerObjectModel[];
}
