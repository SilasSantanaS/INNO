import { NgModule } from '@angular/core';
import { TableModule as TModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    TModule,
    CommonModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
