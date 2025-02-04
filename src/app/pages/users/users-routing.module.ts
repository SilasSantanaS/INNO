import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: UsersComponent,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./add-users/add-users.module').then((m) => m.AddUsersModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./add-users/add-users.module').then((m) => m.AddUsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
