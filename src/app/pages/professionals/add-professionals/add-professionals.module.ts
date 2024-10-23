import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AddProfessionalsRoutingModule } from './add-professionals-routing.module';

import { AddProfessionalsComponent } from './add-professionals.component';

@NgModule({
  declarations: [AddProfessionalsComponent],
  imports: [
    CardModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    AddProfessionalsRoutingModule
  ]
})
export class AddProfessionalsModule { }
