import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthPlansComponent } from './health-plans.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: HealthPlansComponent,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./add-health-plans/add-health-plans.module').then(
        (m) => m.AddHealthPlansModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthPlansRoutingModule {}
