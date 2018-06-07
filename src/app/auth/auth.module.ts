import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


import { reducers } from './store/reducers';
import { AuthEffects } from './store/effects/auth.effects';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent, AuthComponent]
})
export class AuthModule {
}
