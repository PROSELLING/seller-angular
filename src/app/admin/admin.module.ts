import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../core/services/interceptors';
import { GanttComponent } from './gantt/gantt.component';
import { SaleEditComponent } from './sale/sale-edit/sale-edit.component';
import { ClientProfileComponent} from './components/client-profile/client-profile.component';
import { ClientSidenavComponent } from './components/client-sidenav/client-sidenav.component';
import { ClientsModule } from '../clients/clients.module';
import { SalesListComponent } from './sale/sales-list/sales-list.component';
import { SaleStepsComponent } from './components/sale-steps/sale-steps.component';
import { SaleAddComponent } from './sale/sale-add/sale-add.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './sale/store/index';
import { EffectsModule } from '@ngrx/effects';
import { SaleEffects } from './sale/store/effects/sale.effects';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule,
    ClientsModule,
    StoreModule.forFeature('sales', reducers),
    EffectsModule.forFeature([SaleEffects])
  ],
  declarations: [
    AdminComponent,
    GanttComponent,
    SaleAddComponent,
    SaleEditComponent,
    SalesListComponent,
    SaleStepsComponent,
    ClientProfileComponent,
    ClientSidenavComponent
  ],
  providers: [httpInterceptorProviders]
})
export class AdminModule {
}
