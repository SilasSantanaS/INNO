import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPatientsRoutingModule } from './add-patients-routing.module';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { BreadCrumbModule } from "../../../components/bread-crumb/bread-crumb.module";

import { AddPatientsComponent } from './add-patients.component';

@NgModule({
  declarations: [
    AddPatientsComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    ButtonModule,
    CommonModule,
    DividerModule,
    SpinnerModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    AddPatientsRoutingModule,
    BreadCrumbModule
]
})
export class AddPatientsModule { }
