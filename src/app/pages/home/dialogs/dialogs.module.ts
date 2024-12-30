import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPatientDialogModule } from './search-patient-dialog/search-patient-dialog.module';
import { SearchProfessionalDialogModule } from './search-professional-dialog/search-professional-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchPatientDialogModule,
    SearchProfessionalDialogModule
  ]
})
export class DialogsModule { }
