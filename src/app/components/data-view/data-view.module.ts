import { TagModule } from 'primeng/tag';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DataViewModule as DataViewModulePrimeNg } from 'primeng/dataview';

import { DataViewComponent } from './data-view.component';

@NgModule({
  declarations: [
    DataViewComponent
  ],
  imports: [
    TagModule,
    ButtonModule,
    CommonModule,
    DataViewModulePrimeNg
  ],
  exports: [
    DataViewComponent
  ]
})
export class DataViewModule { }
