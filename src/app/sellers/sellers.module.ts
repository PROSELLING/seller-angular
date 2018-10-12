import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersRoutingModule } from './sellers-routing.module';
import { SellersComponent } from './sellers/sellers.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../core/services/interceptors';
import { reducersSellers } from './store';
import { reducersLeads } from '../leads/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SellersEffects } from './store/effects/sellers.effects';
import { SellerSidenavComponent } from './components/seller-sidenav/seller-sidenav.component';
import { LeadsSidenavComponent } from './components/leads-sidenav/leads-sidenav.component';
import { LeadsEffects } from '../leads/store/effects/leads.effects';

@NgModule({
  imports: [
    SellersRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('sellers', reducersSellers),
    EffectsModule.forFeature([SellersEffects]),
    StoreModule.forFeature('leads', reducersLeads),
    EffectsModule.forFeature([LeadsEffects])
  ],
  declarations: [
    SellersComponent,
    SellerSidenavComponent,
    LeadsSidenavComponent
  ],
  providers: [httpInterceptorProviders]
})
export class SellersModule { }
