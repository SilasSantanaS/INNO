import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TableModule as TModule } from '../../components/table/table.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { TenantsComponent } from './tenants.component';

@NgModule({
  declarations: [TenantsComponent],
  imports: [
    TModule,
    ButtonModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    BreadCrumbModule,
    ReactiveFormsModule,
    TenantsRoutingModule,
  ],
})
export class TenantsModule {}
