import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { DrawerModule } from '../drawer/drawer.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    DrawerModule,
    CommonModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule {}
