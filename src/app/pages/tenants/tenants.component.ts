import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Tier } from '../../enums/tier';
import { Router } from '@angular/router';
import { Status } from '../../enums/status';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ITenant } from '../../interfaces/tenant';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.scss',
})
export class TenantsComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  tenants$!: Observable<ITenant[]>;

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Fanstasia' },
    { field: 'email', header: 'Razão social' },
    { field: 'userRole', header: 'Plano' },
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

  readonly tiers = [
    {
      id: Tier.Starter,
      label: 'Starter',
    },
    {
      id: Tier.Pro,
      label: 'Pro',
    },
    {
      id: Tier.Premium,
      label: 'Premium',
    },
  ];

  form = this.fb.group({
    tier: [],
    search: [],
    status: [],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver tenants',
        routerLink: '/tenants',
      },
    ];
  }

  create(): void {
    this.router.navigate(['tenants/new']);
  }
}
