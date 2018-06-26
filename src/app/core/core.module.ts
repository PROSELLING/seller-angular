import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AlertService } from './services/alert.service';
import { PermissionsService } from './services/permissions.service';
import { RolesService } from './services/roles.service';
import { ClientsService } from './services/clients.service';
import { httpInterceptorProviders } from './services/interceptors';
import { AwsService } from './services/aws.service';
import { FormsService } from './services/forms.service';

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
        ClientsService,
        FormsService,
        PermissionsService,
        RolesService,
        httpInterceptorProviders
      ]
    };
  }
}
