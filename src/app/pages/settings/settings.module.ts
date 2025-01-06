import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { SettingsRoutingModule } from './settings-routing.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    AccordionModule,
    BreadCrumbModule,
    SettingsRoutingModule,
  ],
})
export class SettingsModule {}
