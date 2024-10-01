import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfessionalsRoutingModule } from './professionals-routing.module';

import { ProfessionalsComponent } from './professionals.component';


@NgModule({
  declarations: [
    ProfessionalsComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    DividerModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    ProfessionalsRoutingModule
  ]
})
export class ProfessionalsModule { }
