import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: []
})
export class ProductModule { }
