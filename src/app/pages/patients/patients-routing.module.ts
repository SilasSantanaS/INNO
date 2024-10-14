import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO | Pacientes',
    component: PatientsComponent,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./add-patients/add-patients.module').then(
        (m) => m.AddPatientsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
