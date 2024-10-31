import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';

@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SchedulerComponent
  ]
})
export class SchedulerModule { }
