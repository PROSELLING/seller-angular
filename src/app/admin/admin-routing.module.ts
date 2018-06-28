import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/services/guards/auth-guard.service';
import { AdminComponent } from './admin.component';
import { BudgetComponent } from './budget/budget.component';
import { GanttComponent } from './gantt/gantt.component';
import { ClientSidenavComponent } from './components/client-sidenav/client-sidenav.component';
import { ClientStoreGuardService } from '../core/services/guards/client-store-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService, ClientStoreGuardService]
  },
  {
    path: 'budget/:id',
    component: BudgetComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'budget/:id',
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
