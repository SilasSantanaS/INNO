import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchPatientDialogComponent } from './search-patient-dialog.component';

@NgModule({
  declarations: [SearchPatientDialogComponent],
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule,
  ],
  exports: [SearchPatientDialogComponent],
})
export class SearchPatientDialogModule {}
