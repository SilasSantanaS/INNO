import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';

import { FileUploadModule as FileUploadModulePrimeNg } from 'primeng/fileupload';

import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    BadgeModule,
    ToastModule,
    CommonModule,
    FileUploadModulePrimeNg
  ],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
