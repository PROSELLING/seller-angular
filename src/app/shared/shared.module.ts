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
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { InfoTabComponent } from './components/client-tabs/info-tab/info-tab.component';
import { PhoneTabComponent } from './components/client-tabs/phone-tab/phone-tab.component';
import { EmailTabComponent } from './components/client-tabs/email-tab/email-tab.component';
import { SocialTabComponent } from './components/client-tabs/social-tab/social-tab.component';
import { LocationTabComponent } from './components/client-tabs/location-tab/location-tab.component';
import { RelationshipTabComponent } from './components/client-tabs/relationship-tab/relationship-tab.component';
import { ClientProfileCardComponent } from './components/client-profile-card/client-profile-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClientBadgeComponent } from './components/client-badge/client-badge.component';
import { ClientEmpathyBadgeComponent } from './components/client-empathy-badge/client-empathy-badge.component';

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
    BackgroundImageDirective,
    AlertComponent,
    BlockHeaderComponent,
    ClientCardComponent,
    ClientProfileCardComponent,
    ClientSearchComponent,
    ClientTabsComponent,
    HeaderComponent,
    ClientEmpathyBadgeComponent,
    ClientBadgeComponent,
    PageNotFoundComponent,
    SidenavComponent,
  ],
  declarations: [
    AlertComponent,
    BlockHeaderComponent,
    BackgroundImageDirective,
    ClientProfileCardComponent,
    HeaderComponent,
    SidenavComponent,
    SidenavMenuComponent,
    ClientCardComponent,
    ClientSearchComponent,
    ClientTabsComponent,
    AccountTabComponent,
    EmailTabComponent,
    InfoTabComponent,
    PhoneTabComponent,
    SocialTabComponent,
    LocationTabComponent,
    RelationshipTabComponent,
    PageNotFoundComponent,
    ClientBadgeComponent,
    ClientEmpathyBadgeComponent
  ]
})
export class SharedModule {
}
