import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPatientDialogModule } from './search-patient-dialog/search-patient-dialog.module';
import { ResetPasswordDialogModule } from './reset-password-dialog/reset-password-dialog.module';
import { SearchProfessionalDialogModule } from './search-professional-dialog/search-professional-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResetPasswordDialogModule,
    SearchPatientDialogModule,
    SearchProfessionalDialogModule
  ]
})
export class DialogsModule { }
