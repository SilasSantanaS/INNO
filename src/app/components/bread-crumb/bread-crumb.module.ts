import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { BreadCrumbComponent } from './bread-crumb.component';

@NgModule({
  declarations: [
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    BreadCrumbComponent
   ]
})
export class BreadCrumbModule { }
