import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { TimelineModule as TimelineModuleNg } from 'primeng/timeline';

import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    DialogModule,
    ButtonModule,
    CommonModule,
    TimelineModuleNg
  ],
  exports: [
    TimelineComponent
  ]
})
export class TimelineModule { }
