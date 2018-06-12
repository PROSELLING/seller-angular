import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../core/services/interceptors';

import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClientsEffects } from './store/effects/clients.effects';

@NgModule({
  imports: [
    ClientsRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('clients', reducers),
    EffectsModule.forFeature([ClientsEffects]),
  ],
  declarations: [ClientsComponent],
  providers: [httpInterceptorProviders]
})
export class ClientsModule { }
