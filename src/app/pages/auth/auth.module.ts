import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SpinnerModule } from '../../components/spinner/spinner.module';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    SpinnerModule,
    InputTextModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
