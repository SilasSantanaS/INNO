import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SchedulerModule } from '../../components/scheduler/scheduler.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SchedulerModule,
    BreadCrumbModule,
    CalendarRoutingModule
  ],
  exports: [
  ]
})
export class CalendarModule { }
