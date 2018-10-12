import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SellersRoutingModule } from './sellers-routing.module';
// import { SellersComponent } from './sellers/sellers.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../core/services/interceptors';
import { reducersLeads } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads/leads.component';
import { LeadsEffects } from './store/effects/leads.effects';
// import { SellerSidenavComponent } from './components/seller-sidenav/seller-sidenav.component';
// import { LeadsSidenavComponent } from './components/leads-sidenav/leads-sidenav.component';

@NgModule({
  imports: [
    LeadsRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('leads', reducersLeads),
    EffectsModule.forFeature([LeadsEffects])
  ],
  declarations: [
    LeadsComponent,
    // SellerSidenavComponent,
    // LeadsSidenavComponent
  ],
  providers: [httpInterceptorProviders]
})
export class LeadsModule { }
