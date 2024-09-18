
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';

import { DrawerComponent } from './drawer.component';


@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    SidebarModule,
    StyleClassModule
  ],
  exports: [DrawerComponent]
})
export class DrawerModule { }
