import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AuthRoutingModule } from './auth-routing.module';
import { SpinnerModule } from '../../components/spinner/spinner.module';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    ButtonModule,
    CommonModule,
    SpinnerModule,
    InputTextModule,
    AuthRoutingModule,
    InputSwitchModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
