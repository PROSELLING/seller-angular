import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersComponent } from './sellers/sellers.component';
import { AuthGuardService } from '../core/services/guards/auth-guard.service';
import {SellerSidenavComponent} from './components/seller-sidenav/seller-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: SellersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'seller/:id',
    component: SellerSidenavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
