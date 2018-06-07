import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AlertService } from './services/alert.service';
import { LayoutService } from './services/layout.service';
import { StoreService } from './services/store.service';
import { PermissionsService } from './services/permissions.service';
import { RolesService } from './services/roles.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AlertService,
    AuthGuardService,
    AuthService,
    LayoutService,
    PermissionsService,
    RolesService,
    StoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
