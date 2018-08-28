import { BaseModel } from './base.model';
import { ObjectModel } from './meta.model';

export interface ProductModel extends BaseModel {
  brake: BrakeModel;
  capacity: string;
  distance_axis: number;
  doors: number;
  estado: string;
  ground: number;
  high: number;
  id_axi: number;
  id_brand: number;
  id_cabin: number;
  id_clutche: number;
  id_direction: number;
  id_engine: number;
  id_model: number;
  id_tire: number;
  id_traction: number;
  id_transmission: number;
  name: string;
  origin_module: string;
  seq: string;
  status: string;
  suspension: SuspensionModel;
  tma: string;
  total_length: number;
  total_width: number;
  version: string;
  weight: number;
  year: string;
}

export interface SuspensionModel {
  back: string;
  front: string;
  general: string;
}

export interface BrakeModel {
  back: string;
  engine: string;
  front: string;
  parking: string;
  service: string;
}

export interface ProductMetaModel {
  axis: ObjectModel[];
  brands: ObjectModel[];
  cabines: ObjectModel[];
  clutches: ObjectModel[];
  directions: ObjectModel[];
  engines: ObjectModel[];
  tires: ObjectModel[];
  tractions: ObjectModel[];
  transmissions: ObjectModel[];
}

export interface ProductPayloadModel {
  products: ProductModel[];
}
