import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { UsersComponent } from './users.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { TableModule as TModule } from '../../components/table/table.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    TModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    BreadCrumbModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
