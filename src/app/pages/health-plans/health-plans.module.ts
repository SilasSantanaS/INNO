import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerModule } from '../../components/spinner/spinner.module';
import { HealthPlansRoutingModule } from './health-plans-routing.module';
import { TableModule as TModule } from '../../components/table/table.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { HealthPlansComponent } from './health-plans.component';

@NgModule({
  declarations: [HealthPlansComponent],
  imports: [
    TModule,
    CommonModule,
    ButtonModule,
    SpinnerModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    BreadCrumbModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    HealthPlansRoutingModule,
  ],
})
export class HealthPlansModule {}
