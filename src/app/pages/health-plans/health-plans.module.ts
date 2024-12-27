import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HealthPlansRoutingModule } from './health-plans-routing.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { HealthPlansComponent } from './health-plans.component';

@NgModule({
  declarations: [
    HealthPlansComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadCrumbModule,
    HealthPlansRoutingModule
  ]
})
export class HealthPlansModule { }
