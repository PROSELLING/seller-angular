import { SaleActionsUnion, ProductsActionTypes } from '../actions/products.actions';
import { ObjectModel } from '../../../core/models/meta.model';

export interface State {
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

export const initialState: State = {
  axis: [],
  brands: [],
  cabines: [],
  clutches: [],
  directions: [],
  engines: [],
  tires: [],
  tractions: [],
  transmissions: [],
};

export function reducer(state = initialState, action: SaleActionsUnion): State {
  switch (action.type) {
    case ProductsActionTypes.LoadMetaSuccess: {
      return {
        ...state,
        axis: action.payload.axis,
        brands: action.payload.brands,
        cabines: action.payload.cabines,
        clutches: action.payload.clutches,
        directions: action.payload.directions,
        engines: action.payload.engines,
        tires: action.payload.tires,
        tractions: action.payload.tractions,
        transmissions: action.payload.transmissions,
      };
    }
    default: {
      return state;
    }
  }
}

export const getAxis = (state: State) => state.axis;
export const getBrands = (state: State) => state.brands;
export const getCabines = (state: State) => state.cabines;
export const getClutches = (state: State) => state.clutches;
export const getDirections = (state: State) => state.directions;
export const getEngines = (state: State) => state.engines;
export const getTires = (state: State) => state.tires;
export const getTractions = (state: State) => state.tractions;
export const getTransmissions = (state: State) => state.transmissions;
