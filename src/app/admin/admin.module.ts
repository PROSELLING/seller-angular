import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../core/services/interceptors';
import { GanttComponent } from './gantt/gantt.component';
import { SaleComponent } from './sale/sale.component';
import { ClientSidenavComponent } from './components/client-sidenav/client-sidenav.component';
import { ClientsModule } from '../clients/clients.module';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule,
    ClientsModule
  ],
  declarations: [
    AdminComponent,
    GanttComponent,
    SaleComponent,
    SalesComponent,
    ClientSidenavComponent
  ],
  providers: [httpInterceptorProviders]
})
export class AdminModule {
}
