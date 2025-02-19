import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    title: 'INNO | Entrar na conta',
    component: AuthComponent,
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
