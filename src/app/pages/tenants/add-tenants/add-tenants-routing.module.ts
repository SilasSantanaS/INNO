import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTenantsComponent } from './add-tenants.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: AddTenantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTenantsRoutingModule { }
