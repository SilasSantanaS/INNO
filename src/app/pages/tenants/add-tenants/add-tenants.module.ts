import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTenantsRoutingModule } from './add-tenants-routing.module';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { BreadCrumbModule } from '../../../components/bread-crumb/bread-crumb.module';

import { AddTenantsComponent } from './add-tenants.component';

@NgModule({
  declarations: [
    AddTenantsComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    SpinnerModule,
    SpinnerModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputMaskModule,
    BreadCrumbModule,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    AddTenantsRoutingModule
  ]
})
export class AddTenantsModule { }
