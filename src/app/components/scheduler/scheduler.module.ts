import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { SchedulerComponent } from './scheduler.component';

@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  exports: [
    SchedulerComponent
  ]
})
export class SchedulerModule { }
