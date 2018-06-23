import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/services/guards/auth-guard.service';
import { AdminComponent } from './admin.component';
import { BudgetComponent } from './budget/budget.component';
import { GanttComponent } from './gantt/gantt.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService]
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
