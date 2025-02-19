import { Status } from '../../../enums/status';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { IHealthPlan } from '../../../interfaces/health-plan';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HealthPlansFacade } from '../../../facades/health-plans.facade';

@Component({
  selector: 'app-add-health-plans',
  templateUrl: './add-health-plans.component.html',
  styleUrl: './add-health-plans.component.scss',
})
export class AddHealthPlansComponent implements OnInit {
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private healthPlansFacade: HealthPlansFacade
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver planos de saúde',
        routerLink: '/health-plans',
      },
      {
        label: 'Cadastrar novo plano de saúde',
        routerLink: '/health-plans/new',
      },
    ];

    this.editComponentSettings();
  }

  save(): void {
    this.isLoading = true;
    const healthPlan = { ...this.form.value } as IHealthPlan;

    this.route.paramMap.subscribe((params) => {
      const healthPlanId = params.get('id');

      if (healthPlanId) {
        this.healthPlansFacade
          .updateHealthPlan(+healthPlanId, healthPlan)
          .subscribe(() => {
            this.isLoading = false;

            this.messageService.add({
              severity: 'success',
              summary: 'Êxito',
              detail: 'Plano de saúde editado com sucesso.',
            });

            this.router.navigate(['health-plans']);
          });

        return;
      }

      this.healthPlansFacade.newHealthPlan(healthPlan).subscribe(() => {
        this.isLoading = false;

        this.messageService.add({
          severity: 'success',
          summary: 'Êxito',
          detail: 'Plano de saúde cadastrado com sucesso.',
        });

        this.router.navigate(['health-plans']);
      });
    });
  }

  editComponentSettings(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.healthPlansFacade
          .getHealthPlanById(+id)
          .subscribe((healthPlan) => {
            this.form.patchValue({
              ...healthPlan,
              status: healthPlan.inactivatedAt
                ? Status.Inactive
                : Status.Active,
            });
          });

        this.btnTitle = 'Editar';
      }
    });
  }
}
