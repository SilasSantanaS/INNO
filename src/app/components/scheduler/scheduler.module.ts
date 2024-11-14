import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FullCalendarModule } from '@fullcalendar/angular';

import { SchedulerComponent } from './scheduler.component';

@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    FullCalendarModule
  ],
  exports: [
    SchedulerComponent
  ]
})
export class SchedulerModule { }
