import { map } from 'rxjs';
import { Tier } from '../../enums/tier';
import { Router } from '@angular/router';
import { Status } from '../../enums/status';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ITenant } from '../../interfaces/tenant';
import { MenuItem, MessageService } from 'primeng/api';
import { TenantsFacade } from '../../facades/tenants.facade';
import { INITIAL_STATE, ITenantsState } from '../../stores/tenants.store';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.scss',
})
export class TenantsComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  metadata: ITenantsState['metadata'] = INITIAL_STATE.metadata;

  readonly filter$ = this.tenantsFacade.filter$;
  readonly tenants$ = this.tenantsFacade.tenantsState$.pipe(
    map((res) => {
      this.metadata = res.metadata;

      return res.result.map((tenant) => ({
        ...tenant,
        pricingTierId: Tier[tenant.pricingTierId],
        status: tenant.inactivatedAt ? 'Inativo' : 'Ativo',
      }));
    })
  );

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'corporateName', header: 'Razão social' },
    { field: 'name', header: 'Fanstasia' },
    { field: 'pricingTierId', header: 'Plano' },
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
      id: Tier.Enterprise,
      label: 'Enterprise',
    },
  ];

  form = this.fb.group({
    tier: [],
    search: [],
    status: [],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private tenantsFacade: TenantsFacade,
    private messageService: MessageService
  ) {}

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

  editTenant(tenant: ITenant): void {
    this.router.navigate([`tenants/edit/${tenant.id}`]);
  }

  deleteTenant(tenant: ITenant): void {
    this.tenantsFacade.deleteTenant(tenant).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: `Tenant excluído com sucesso.`,
      });
    });
  }
}
