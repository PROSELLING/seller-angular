import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersComponent } from './sellers/sellers.component';
import { AuthGuardService } from '../core/services/guards/auth-guard.service';
import {LeadsSidenavComponent} from './components/leads-sidenav/leads-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: SellersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'lead/:id',
    component: LeadsSidenavComponent,
    outlet: 'rightSidenav'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
