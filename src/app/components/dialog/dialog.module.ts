import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule as DialogM } from 'primeng/dialog';

import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    DialogM,
    CommonModule,
    ButtonModule
  ],
  exports: [ DialogComponent ]
})
export class DialogModule { }
