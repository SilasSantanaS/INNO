import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderModule } from '../components/header/header.module';

import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
