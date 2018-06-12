import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { httpInterceptorProviders } from '../core/services/interceptors';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [AdminComponent, ScheduleComponent],
  providers: [httpInterceptorProviders]
})
export class AdminModule { }
