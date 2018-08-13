import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminComponent } from './admin.component';
import { SaleEditComponent } from './sale/sale-edit/sale-edit.component';
import { GanttComponent } from './gantt/gantt.component';
import { ClientSidenavComponent } from './components/client-sidenav/client-sidenav.component';
import { ClientStoreGuard } from '../core/guards/client-store.guard';
import { SalesListComponent } from './sale/sales-list/sales-list.component';
import { SaleAddComponent } from './sale/sale-add/sale-add.component';
import { ClientExistsGuard } from '../core/guards/client-exists.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard, ClientStoreGuard]
  },
  {
    path: 'sales',
    component: SalesListComponent,
    canActivate: [AuthGuard, ClientStoreGuard]
  },
  {
    path: 'sale/add',
    component: SaleAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sale/:id/edit',
    component: SaleEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sale/:id',
    component: GanttComponent,
    outlet: 'rightSidenav'
  },
  {
    path: 'cliente/:id',
    component: ClientSidenavComponent,
    outlet: 'rightSidenav',
    canActivate: [ClientExistsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
