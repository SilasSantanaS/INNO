import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashPatientsComponent } from './dash-patients.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: DashPatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashPatientsRoutingModule { }
