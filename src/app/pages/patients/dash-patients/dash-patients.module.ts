import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollerModule } from 'primeng/scroller';
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
    ImageModule,
    ButtonModule,
    AvatarModule,
    CommonModule,
    TooltipModule,
    SpinnerModule,
    ScrollerModule,
    BreadCrumbModule,
    AvatarGroupModule,
    DashPatientsRoutingModule
  ]
})
export class DashPatientsModule { }
