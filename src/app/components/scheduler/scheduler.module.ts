import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { StepperModule } from '../stepper/stepper.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FullCalendarModule } from '@fullcalendar/angular';

import { SchedulerComponent } from './scheduler.component';

@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    StepperModule,
    DividerModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    InputMaskModule,
    AutoCompleteModule,
    FullCalendarModule,
  ],
  exports: [SchedulerComponent],
})
export class SchedulerModule {}
