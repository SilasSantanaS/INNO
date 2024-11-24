import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SpinnerModule } from '../../components/spinner/spinner.module';
import { DataViewModule } from '../../components/data-view/data-view.module';
import { SchedulerModule } from '../../components/scheduler/scheduler.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    TabViewModule,
    SpinnerModule,
    DropdownModule,
    DataViewModule,
    SchedulerModule,
    BreadCrumbModule,
    CalendarRoutingModule
  ],
  exports: [
  ]
})
export class CalendarModule { }
