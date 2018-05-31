import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [AdminComponent, ScheduleComponent]
})
export class AdminModule { }
