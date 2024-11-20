import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { StepperModule as StepperModulePrimeNg } from 'primeng/stepper';

import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    StepperModulePrimeNg
  ],
  exports: [StepperComponent]
})
export class StepperModule { }
