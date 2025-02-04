import { map } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Status } from '../../enums/status';
import { FormBuilder } from '@angular/forms';
import { IUser } from '../../interfaces/user';
import { Profile } from '../../enums/profile';
import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../../facades/users.facade';
import { INITIAL_STATE, IUsersState } from '../../stores/users.store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  metadata: IUsersState['metadata'] = INITIAL_STATE.metadata;

  readonly filter$ = this.usersFacade.filter$;
  readonly users$ = this.usersFacade.usersState$.pipe(
    map((res) => {
      this.metadata = res.metadata;

      return res.result.map((user) => ({
        ...user,
      }));
    })
  );

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nome' },
    { field: 'email', header: 'E-mail' },
    { field: 'userRole', header: 'Perfil' },
    { field: 'status', header: 'Status' },
  ];

  readonly statuses = [
    {
      id: Status.Active,
      label: 'Ativo',
    },
    {
      id: Status.Inactive,
      label: 'Inativo',
    },
  ];

  readonly userRoles = [
    {
      id: Profile.Admin,
      label: 'Administrardor',
    },
    {
      id: Profile.Receptionist,
      label: 'Recepcionista',
    },
    {
      id: Profile.Professional,
      label: 'Profissional de Saúde',
    },
    {
      id: Profile.Patient,
      label: 'Paciente',
    },
  ];

  form = this.fb.group({
    userRole: [],
    search: [],
    status: [],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver usuários',
        routerLink: '/users',
      },
    ];
  }

  create(): void {
    this.router.navigate(['users/new']);
  }

  editUser(user: IUser): void {
    this.router.navigate([`users/edit/${user.id}`]);
  }
}
