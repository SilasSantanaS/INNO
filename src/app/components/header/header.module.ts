import { NgModule } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { DrawerModule } from '../drawer/drawer.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    ChipsModule,
    BadgeModule,
    DrawerModule,
    CommonModule,
    ButtonModule,
    MenubarModule,
    TooltipModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    InputGroupModule,
    OverlayPanelModule,
    InputGroupAddonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
