import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { PermissionService } from './services/permission.service';
import { RoleService } from './services/role.service';
import { ClientService } from './services/client.service';
import { httpInterceptorProviders } from './services/interceptors';
import { AwsService } from './services/aws.service';
import { FormService } from './services/form.service';
import { ClientStoreGuard } from './guards/client-store.guard';
import { SellerService } from './services/seller.service';
import { SaleService } from './services/sale.service';
import { StockService } from './services/stock.service';
import { ClientExistsGuard } from './guards/client-exists.guard';
import { ProductService } from './services/product.service';
import { ClientCrudService } from './services/crud/client-crud.service';
import { SaleCrudService } from './services/crud/sale-crud.service';

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
        AuthGuard,
        AuthService,
        AwsService,
        ClientCrudService,
        ClientExistsGuard,
        ClientService,
        ClientStoreGuard,
        FormService,
        PermissionService,
        ProductService,
        RoleService,
        SaleCrudService,
        SaleService,
        SellerService,
        StockService,
        httpInterceptorProviders
      ]
    };
  }
}
