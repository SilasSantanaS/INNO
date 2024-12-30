import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from "../../../components/spinner/spinner.module";
import { AddHealthPlansRoutingModule } from './add-health-plans-routing.module';
import { BreadCrumbModule } from '../../../components/bread-crumb/bread-crumb.module';

import { AddHealthPlansComponent } from './add-health-plans.component';

@NgModule({
  declarations: [AddHealthPlansComponent],
  imports: [
    FormsModule,
    CardModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputMaskModule,
    BreadCrumbModule,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    AddHealthPlansRoutingModule,
    SpinnerModule
],
})
export class AddHealthPlansModule {}
