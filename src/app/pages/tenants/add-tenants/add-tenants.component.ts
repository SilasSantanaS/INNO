import { Tier } from '../../../enums/tier';
import { Status } from '../../../enums/status';
import { Component, OnInit } from '@angular/core';
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
      id: Tier.Premium,
      label: 'Premium',
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
      tier: ['', Validators.required],
      status: ['', Validators.required],
      nickname: ['', Validators.required],
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

    this.configureEditComponent();
  }

  configureEditComponent(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    const tenant = this.tenantsFacade.getTenantById(+id);

    this.form.patchValue(tenant);

    this.btnTitle = 'Editar';
  }

  save(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Tenant cadastrado com sucesso.',
      });

      this.router.navigate(['tenants']);
    }, 3000);
  }
}
