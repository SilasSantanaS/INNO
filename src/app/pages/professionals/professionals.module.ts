import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { ProfessionalsComponent } from './professionals.component';


@NgModule({
  declarations: [
    ProfessionalsComponent
  ],
  imports: [
    CommonModule,
    DividerModule,
    ButtonModule,
    ProfessionalsRoutingModule
  ]
})
export class ProfessionalsModule { }
