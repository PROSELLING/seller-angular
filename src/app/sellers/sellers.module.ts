import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersRoutingModule } from './sellers-routing.module';
import { SellersComponent } from './sellers/sellers.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../core/services/interceptors';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SellersEffects } from './store/effects/sellers.effects';
import { SellerSidenavComponent } from './components/seller-sidenav/seller-sidenav.component';

@NgModule({
  imports: [
    SellersRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('sellers', reducers),
    EffectsModule.forFeature([SellersEffects])
  ],
  declarations: [
    SellersComponent,
    SellerSidenavComponent
  ],
  providers: [httpInterceptorProviders]
})
export class SellersModule { }
