// export class LeadModel{
//     public id:number;
//     public address: string;
//     public birthday: string;
//     public comments: string;
//     public document_nro: string;
//     public email: string;
//     public cellphone: string;
//     public lead_id: string;
//     public lead_url_origin: string;
//     public first_name: string;
//     public name: string;
//     public phone: string;
//     public point_of_sale: number;
//     public last_name: string;
//     public pre_phone: string;
//     public vehicle_code: string;
//     public website_id: string;
//     public website_lead_id: string;
//     public seleccionado: boolean; 

//     constructor (seleccion_lead: boolean){
//         this.id = null;
//         this.address = null;
//         this.birthday = null;
//         this.comments = null;
//         this.document_nro = null;
//         this.email = null;
//         this.cellphone = null;
//         this.lead_id = null;
//         this.lead_url_origin = null;
//         this.first_name = null;
//         this.name = null;
//         this.phone = null;
//         this.point_of_sale = null;
//         this.last_name = null;
//         this.pre_phone = null;
//         this.vehicle_code = null;
//         this.website_id = null;
//         this.website_lead_id = null;
//         this.seleccionado = seleccion_lead;
//     }
// }

import { BaseModel } from './base.model';

export interface LeadModel extends BaseModel {
    id:number;
    address: string;
    birthday: string;
    comments: string;
    document_nro: string;
    email: string;
    cellphone: string;
    lead_id: string;
    lead_url_origin: string;
    first_name: string;
    name: string;
    phone: string;
    point_of_sale: number;
    last_name: string;
    pre_phone: string;
    vehicle_code: string;
    website_id: string;
    website_lead_id: string;
    seleccionado: boolean;  
}

export interface LeadsResponseModel {
  current_page: number;
  data: LeadModel[];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export interface LeadsList{
    data: LeadModel[];
    seleccionado: boolean;
}

export interface LeadPayloadModel {
    leads: LeadsResponseModel;
}

export interface LeadObjectModel {
    id: string;
    value: string;
}