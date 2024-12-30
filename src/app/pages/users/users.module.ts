import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { BreadCrumbModule } from '../../components/bread-crumb/bread-crumb.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BreadCrumbModule,
    UsersRoutingModule
  ],
})
export class UsersModule {}
