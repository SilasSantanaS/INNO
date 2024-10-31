import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from '../dialog/dialog.module';
import { TableModule as TModule } from 'primeng/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    TModule,
    ButtonModule,
    DialogModule,
    CommonModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
