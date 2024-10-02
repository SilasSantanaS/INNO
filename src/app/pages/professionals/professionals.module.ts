import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableModule as TModule } from '../../components/table/table.module';

import { ProfessionalsComponent } from './professionals.component';



@NgModule({
  declarations: [
    ProfessionalsComponent
  ],
  imports: [
    TModule,
    CommonModule,
    ButtonModule,
    DividerModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    ProfessionalsRoutingModule
  ]
})
export class ProfessionalsModule { }
