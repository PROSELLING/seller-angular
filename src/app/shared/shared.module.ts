import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './modules/app-material.module';
import { AppCovalentModule } from './modules/app-covalent.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavMenuComponent } from './components/sidenavmenu/sidenavmenu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackgroundImageDirective } from './directives/background-image.directive';
import { ClientTabsComponent } from './components/client-tabs/client-tabs.component';
import { AccountTabComponent } from './components/client-tabs/account-tab/account-tab.component';

@NgModule({
  imports: [
    AppMaterialModule,
    AppCovalentModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    Ng2GoogleChartsModule,
    NgHttpLoaderModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AppMaterialModule,
    AppCovalentModule,
    FlexLayoutModule,
    FormsModule,
    NgHttpLoaderModule,
    Ng2GoogleChartsModule,
    ReactiveFormsModule,
    AlertComponent,
    BackgroundImageDirective,
    ClientTabsComponent,
    HeaderComponent,
    SidenavComponent
  ],
  declarations: [
    AlertComponent,
    BackgroundImageDirective,
    HeaderComponent,
    SidenavComponent,
    SidenavMenuComponent,
    ClientTabsComponent,
    AccountTabComponent
  ]
})
export class SharedModule {
}
