import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { PatientsComponent } from './patients.component';

@NgModule({
  declarations: [
    PatientsComponent,
    AddPatientsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadCrumbModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
