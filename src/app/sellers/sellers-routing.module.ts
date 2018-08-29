import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersComponent } from './sellers/sellers.component';
import {LeadsSidenavComponent} from './components/leads-sidenav/leads-sidenav.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SellersComponent,
    canActivate: [AuthGuard]
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
