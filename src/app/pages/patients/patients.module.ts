import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from '../../components/table/table.module';
import { PatientsRoutingModule } from './patients-routing.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { PatientsComponent } from './patients.component';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    BreadCrumbModule,
    ReactiveFormsModule,
    PatientsRoutingModule,
  ],
})
export class PatientsModule {}
