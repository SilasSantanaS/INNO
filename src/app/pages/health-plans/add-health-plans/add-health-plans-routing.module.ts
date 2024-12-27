import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHealthPlansComponent } from './add-health-plans.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: AddHealthPlansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHealthPlansRoutingModule {}
