import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { TimelineModule } from '../../components/timeline/timeline.module';
import { TableModule as TModule } from '../../components/table/table.module';
import { FileCardModule } from '../../components/file-card/file-card.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { PatientsComponent } from './patients.component';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    TModule,
    CommonModule,
    ButtonModule,
    TimelineModule,
    FileCardModule,
    DropdownModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    BreadCrumbModule,
    ReactiveFormsModule,
    PatientsRoutingModule,
  ],
})
export class PatientsModule {}
