import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadCrumbModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
