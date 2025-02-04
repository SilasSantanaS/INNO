import { Tier } from '../../../enums/tier';
import { Status } from '../../../enums/status';
import { Component, OnInit } from '@angular/core';
import { ITenant } from '../../../interfaces/tenant';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsFacade } from '../../../facades/tenants.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tenants',
  templateUrl: './add-tenants.component.html',
  styleUrl: './add-tenants.component.scss',
})
export class AddTenantsComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  btnTitle: string = 'Cadastrar';
  breadcrumbItems: MenuItem[] = [];

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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private tenantsFacade: TenantsFacade,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      pricingTierId: ['', Validators.required],
      corporateName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver tenants',
        routerLink: '/tenants',
      },
      {
        label: 'Cadastrar novo tenant',
        routerLink: '/tenants/new',
      },
    ];

    this.editComponentSettings();
  }

  editComponentSettings(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.tenantsFacade.getTenantById(+id).subscribe((tenant) => {
          this.form.patchValue({
            ...tenant,
            status: tenant.inactivatedAt ? Status.Inactive : Status.Active,
          });
        });

        this.btnTitle = 'Editar';
      }
    });
  }

  save(): void {
    this.isLoading = true;
    const tenant = { ...this.form.value } as ITenant;

    this.route.paramMap.subscribe((params) => {
      const tenantId = params.get('id');

      if (tenantId) {
        this.tenantsFacade.updateTenant(+tenantId, tenant).subscribe(() => {
          this.isLoading = false;

          this.messageService.add({
            severity: 'success',
            summary: 'Êxito',
            detail: 'Tenant editado com sucesso.',
          });

          this.router.navigate(['tenants']);
        });

        return;
      }

      this.tenantsFacade.newTenant(tenant).subscribe(() => {
        this.isLoading = false;

        this.messageService.add({
          severity: 'success',
          summary: 'Êxito',
          detail: 'Tenant cadastrado com sucesso.',
        });

        this.router.navigate(['tenants']);
      });
    });
  }
}
