import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUsersRoutingModule } from './add-users-routing.module';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { BreadCrumbModule } from '../../../components/bread-crumb/bread-crumb.module';

import { AddUsersComponent } from './add-users.component';

@NgModule({
  declarations: [AddUsersComponent],
  imports: [
    CardModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    SpinnerModule,
    PasswordModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputMaskModule,
    BreadCrumbModule,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    AddUsersRoutingModule,
  ],
})
export class AddUsersModule {}
