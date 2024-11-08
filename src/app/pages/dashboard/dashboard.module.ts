import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccordionModule } from '../../components/accordion/accordion.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CardModule,
    ChartModule,
    CommonModule,
    ButtonModule,
    DividerModule,
    AccordionModule,
    BreadCrumbModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
