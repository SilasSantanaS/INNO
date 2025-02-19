import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

import { FileCardComponent } from './file-card.component';

@NgModule({
  declarations: [
    FileCardComponent
  ],
  imports: [
    CardModule,
    CommonModule,
    ButtonModule,
    TooltipModule,
  ],
  exports: [
    FileCardComponent
  ]
})
export class FileCardModule { }
