import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './modules/app-material.module';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavMenuComponent } from './components/sidenavmenu/sidenavmenu.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    AppMaterialModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    NgHttpLoaderModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AppMaterialModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    FlexLayoutModule,
    FormsModule,
    NgHttpLoaderModule,
    ReactiveFormsModule,
    AlertComponent,
    HeaderComponent,
    SidenavComponent
  ],
  declarations: [
    AlertComponent,
    HeaderComponent,
    SidenavComponent,
    SidenavMenuComponent
  ]
})
export class SharedModule {
}
