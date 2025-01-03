import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users.component';

const routes: Routes = [
  {
    path: '',
    title: 'INNO',
    component: AddUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUsersRoutingModule { }
