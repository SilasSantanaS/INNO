import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AddHealthPlansRoutingModule } from './add-health-plans-routing.module';
import { BreadCrumbModule } from '../../../components/bread-crumb/bread-crumb.module';

import { AddHealthPlansComponent } from './add-health-plans.component';

@NgModule({
  declarations: [AddHealthPlansComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BreadCrumbModule,
    AddHealthPlansRoutingModule,
  ],
})
export class AddHealthPlansModule {}
