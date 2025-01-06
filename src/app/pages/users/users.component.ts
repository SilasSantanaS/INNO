import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Status } from '../../enums/status';
import { FormBuilder } from '@angular/forms';
import { UserRole } from '../../enums/user-role';
import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../../facades/users.facade';
import { IHealthPlan } from '../../interfaces/health-plan';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  healthPlans$!: Observable<IHealthPlan[]>;

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
      id: UserRole.Admin,
      label: 'Administrardor',
    },
    {
      id: UserRole.Receptionist,
      label: 'Recepcionista',
    },
    {
      id: UserRole.Professional,
      label: 'Profissional de Saúde',
    },
    {
      id: UserRole.Patient,
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
}
