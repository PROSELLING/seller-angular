import { BaseModel } from './base.model';
import { ObjectModel, ResponseModel, StockMetaModel } from './meta.model';

export interface StockModel extends BaseModel {
  alternativepaint: string;
  alternativepaint2: string;
  anioarma: string;
  brand: ObjectModel;
  catalogo: string;
  color: string;
  condition: string;
  cylinder_name: string;
  delivery: string;
  det_estatus: string;
  doors: ObjectModel;
  factorie_code: string;
  fase: string;
  icon: string;
  id_companie: number;
  id_product: number;
  id_virtual_stock_file: number;
  id_virtual_stock_process: number;
  marca: ObjectModel;
  message: string;
  model: ObjectModel;
  name: string;
  nombre: string;
  order_month: string;
  order_number: number;
  order_type: string;
  order_year: string;
  ovgroup: number;
  ovorder: number;
  paint_code: string;
  paint_descr: string;
  prod_status: string;
  seq: string;
  serie: string;
  status: string;
  tipo: string;
  tma: string;
  upholstered: string;
}

export interface StockResponseModel extends ResponseModel {
  data: StockModel[];
}

export interface VirtualStockPayloadModel extends StockMetaModel {
  virtualstock: StockResponseModel;
}

export interface PhysicalStockPayloadModel extends StockMetaModel {
  physicalstock: StockResponseModel;
}
