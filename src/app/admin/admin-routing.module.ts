import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/services/guards/auth-guard.service';
import { AdminComponent } from './admin.component';
import { SaleComponent } from './sale/sale.component';
import { GanttComponent } from './gantt/gantt.component';
import { ClientSidenavComponent } from './components/client-sidenav/client-sidenav.component';
import { ClientStoreGuardService } from '../core/services/guards/client-store-guard.service';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService, ClientStoreGuardService]
  },
  {
    path: 'sales',
    component: SalesComponent,
    canActivate: [AuthGuardService, ClientStoreGuardService]
  },
  {
    path: 'sale/:id/edit',
    component: SaleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sale/:id',
    component: GanttComponent,
    outlet: 'rightSidenav'
  },
  {
    path: 'client/:id',
    component: ClientSidenavComponent,
    outlet: 'rightSidenav'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
