import { Action } from '@ngrx/store';
import { ProductMetaModel, ProductModel } from '../../../core/models/product.model';




export enum ProductsActionTypes {
  Load = '[Products] Load',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadFail = '[Products] Load Fail',
  LoadMeta = '[Products] Load Meta',
  LoadMetaSuccess = '[Products] Load Meta Success',
  LoadMetaFail = '[Products] Load Meta Fail',
  Select = '[Products] Select',
  ResetProductsState = '[Products] Reset Products State'
}

export class Load implements Action {
  readonly type = ProductsActionTypes.Load;

  constructor(public payload: any) {
  }
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;

  constructor(public payload: ProductModel[]) {
  }
}

export class LoadFail implements Action {
  readonly type = ProductsActionTypes.LoadFail;

  constructor(public payload: any) {
  }
}

export class LoadMeta implements Action {
  readonly type = ProductsActionTypes.LoadMeta;
}

export class LoadMetaSuccess implements Action {
  readonly type = ProductsActionTypes.LoadMetaSuccess;

  constructor(public payload: ProductMetaModel) {
  }
}

export class LoadMetaFail implements Action {
  readonly type = ProductsActionTypes.LoadMetaFail;

  constructor(public payload: any) {
  }
}

export class Select implements Action {
  readonly type = ProductsActionTypes.Select;

  constructor(public payload: number) {
  }
}

export class ResetProductsState implements Action {
  readonly type = ProductsActionTypes.ResetProductsState;
}

export type SaleActionsUnion =
  | Load
  | LoadProductsSuccess
  | LoadFail
  | LoadMeta
  | LoadMetaSuccess
  | LoadMetaFail
  | Select
  | ResetProductsState;
