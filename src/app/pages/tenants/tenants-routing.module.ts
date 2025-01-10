import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantsComponent } from './tenants.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: TenantsComponent,
  },
  {
    path: 'new',
    title: 'INNO',
    loadChildren: () =>
      import('./add-tenants/add-tenants.module').then(
        (m) => m.AddTenantsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantsRoutingModule {}
