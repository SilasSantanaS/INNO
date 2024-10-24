import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '../dialog/dialog.module';
import { TableModule as TModule } from 'primeng/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    TModule,
    DialogModule,
    CommonModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
