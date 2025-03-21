import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { AnalysisComponent } from './analysis.component';

@NgModule({
  declarations: [
    AnalysisComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadCrumbModule,
    AnalysisRoutingModule
  ]
})
export class AnalysisModule { }
