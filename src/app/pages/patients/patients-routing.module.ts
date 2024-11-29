import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: PatientsComponent,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./add-patients/add-patients.module').then(
        (m) => m.AddPatientsModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dash-patients/dash-patients.module').then(
        (m) => m.DashPatientsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
