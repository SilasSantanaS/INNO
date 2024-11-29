import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { DashPatientsRoutingModule } from './dash-patients-routing.module';
import { BreadCrumbModule } from "../../../components/bread-crumb/bread-crumb.module";

import { DashPatientsComponent } from './dash-patients.component';

@NgModule({
  declarations: [
    DashPatientsComponent
  ],
  imports: [
    CardModule,
    ButtonModule,
    AvatarModule,
    CommonModule,
    SpinnerModule,
    BreadCrumbModule,
    AvatarGroupModule,
    DashPatientsRoutingModule
  ]
})
export class DashPatientsModule { }
