import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalsComponent } from './professionals.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO | Profissionais',
    component: ProfessionalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule { }
