import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'sellers',
    loadChildren: './sellers/sellers.module#SellersModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
