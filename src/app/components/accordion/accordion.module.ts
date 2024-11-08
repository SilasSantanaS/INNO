import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { AccordionModule as AccordionModulePrime } from 'primeng/accordion';

import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    BadgeModule,
    AvatarModule,
    CommonModule,
    AccordionModulePrime
  ],
  exports: [AccordionComponent],
})
export class AccordionModule {}
