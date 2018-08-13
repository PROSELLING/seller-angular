import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/services/guards/auth-guard.service';
import { AdminComponent } from './admin.component';
import { SaleEditComponent } from './sale/sale-edit/sale-edit.component';
import { GanttComponent } from './gantt/gantt.component';
import { ClientSidenavComponent } from './components/client-sidenav/client-sidenav.component';
import { ClientStoreGuardService } from '../core/services/guards/client-store-guard.service';
import { SalesComponent } from './sale/sales/sales.component';
import { SaleAddComponent } from './sale/sale-add/sale-add.component';

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
    path: 'sale/add',
    component: SaleAddComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sale/:id/edit',
    component: SaleEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sale/:id',
    component: GanttComponent,
    outlet: 'rightSidenav'
  },
  {
    path: 'cliente/:id',
    component: ClientSidenavComponent,
    outlet: 'rightSidenav'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
