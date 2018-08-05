export interface ClientMetaModel {
  channels: ObjectModel[];
  charges: ObjectModel[];
  client_relations: ObjectModel[];
  client_type_mails: ObjectModel[];
  client_type_phone: ObjectModel[];
  documents: ObjectModel[];
  genders: ObjectModel[];
  marital_status: ObjectModel[];
  ocupations: ObjectModel[];
  origins: ObjectModel[];
  person_type: ObjectModel[];
  type_locations: ObjectModel[];
}

export interface ObjectModel {
  id: string;
  value: string;
}

export interface ResponseModel {
  current_page: number;
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export interface StockMetaModel {
  brands: ObjectModel[];
  doors: ObjectModel[];
  engines: ObjectModel[];
  models: ObjectModel[];
  order_types: ObjectModel[];
  paints: ObjectModel[];
  stock_process: ObjectModel[];
  stock_prod_status: ObjectModel[];
  tractions: ObjectModel[];
}
