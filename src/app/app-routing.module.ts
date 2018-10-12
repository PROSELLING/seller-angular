import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'sellers',
    loadChildren: './sellers/sellers.module#SellersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'sellers',
    loadChildren: './sellers/sellers.module#SellersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'sellers',
    loadChildren: './sellers/sellers.module#SellersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'leads',
    loadChildren: './leads/leads.module#LeadsModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
