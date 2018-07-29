import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AlertService } from './services/alert.service';
import { PermissionService } from './services/permission.service';
import { RoleService } from './services/role.service';
import { ClientService } from './services/client.service';
import { httpInterceptorProviders } from './services/interceptors';
import { AwsService } from './services/aws.service';
import { FormService } from './services/form.service';
import { ClientStoreGuardService } from './services/guards/client-store-guard.service';
import { SaleService } from './services/sale.service';

@NgModule()
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AlertService,
        AuthGuardService,
        AuthService,
        AwsService,
        ClientService,
        ClientStoreGuardService,
        FormService,
        PermissionService,
        RoleService,
        SaleService,
        httpInterceptorProviders
      ]
    };
  }
}
