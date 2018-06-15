import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../core/services/interceptors';
import { GanttComponent } from './gantt/gantt.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [AdminComponent, GanttComponent],
  providers: [httpInterceptorProviders]
})
export class AdminModule { }
