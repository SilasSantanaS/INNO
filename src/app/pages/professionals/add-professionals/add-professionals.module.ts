import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { AddProfessionalsRoutingModule } from './add-professionals-routing.module';
import { BreadCrumbModule } from '../../../components/bread-crumb/bread-crumb.module';

import { AddProfessionalsComponent } from './add-professionals.component';

@NgModule({
  declarations: [AddProfessionalsComponent],
  imports: [
    CardModule,
    CommonModule,
    ButtonModule,
    DividerModule,
    SpinnerModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    BreadCrumbModule,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    AddProfessionalsRoutingModule
  ]
})
export class AddProfessionalsModule { }
