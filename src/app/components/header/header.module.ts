import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DrawerModule } from '../drawer/drawer.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BadgeModule,
    DrawerModule,
    CommonModule,
    ButtonModule,
    MenubarModule,
    TooltipModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule {}
