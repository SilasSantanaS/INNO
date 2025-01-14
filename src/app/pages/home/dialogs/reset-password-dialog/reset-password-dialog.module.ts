import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordDialogComponent } from './reset-password-dialog.component';

@NgModule({
  declarations: [
    ResetPasswordDialogComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  exports: [
    ResetPasswordDialogComponent
  ]
})
export class ResetPasswordDialogModule { }
