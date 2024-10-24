import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalsComponent } from './professionals.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: ProfessionalsComponent
  },
  {
    path: 'new',
    loadChildren: () => import('./add-professionals/add-professionals.module').then(m => m.AddProfessionalsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule { }
