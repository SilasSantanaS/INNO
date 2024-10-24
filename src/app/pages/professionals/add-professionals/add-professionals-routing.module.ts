import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfessionalsComponent } from './add-professionals.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: AddProfessionalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProfessionalsRoutingModule { }
