import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientsComponent } from './add-patients.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: AddPatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPatientsRoutingModule { }
