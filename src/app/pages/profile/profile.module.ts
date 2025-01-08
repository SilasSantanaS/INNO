import { NgModule } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ProfileRoutingModule } from './profile-routing.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    FormsModule,
    ImageModule,
    CommonModule,
    ButtonModule,
    RatingModule,
    DividerModule,
    BreadCrumbModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
