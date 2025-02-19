import { map } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { HealthPlansFacade } from '../../facades/health-plans.facade';
import {
  IHealthPlansState,
  INITIAL_STATE,
} from '../../stores/health-plans.store';
import { IHealthPlan } from '../../interfaces/health-plan';

@Component({
  selector: 'app-health-plans',
  templateUrl: './health-plans.component.html',
  styleUrl: './health-plans.component.scss',
})
export class HealthPlansComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  metadata: IHealthPlansState['metadata'] = INITIAL_STATE.metadata;

  readonly filter$ = this.healthPlansFacade.filter$;
  readonly healthPlans$ = this.healthPlansFacade.healthPlansState$.pipe(
    map((res) => {
      this.metadata = res.metadata;

      return res.result.map((healthPlan) => ({
        ...healthPlan,
        status: healthPlan.inactivatedAt ? 'Inativo' : 'Ativo',
      }));
    })
  );

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nome' },
    { field: 'status', header: 'Status' },
  ];

  form = this.fb.group({
    search: [],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private healthPlansFacade: HealthPlansFacade
  ) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver planos de saúde',
        routerLink: '/health-plans',
      },
    ];
  }

  create(): void {
    this.router.navigate(['health-plans/new']);
  }

  editHealthPlan(healthPlan: IHealthPlan): void {
    this.router.navigate([`health-plans/${healthPlan.id}`]);
  }

  deleteHealthPlan(healthPlan: IHealthPlan): void {
    this.healthPlansFacade.deleteHealthPlan(healthPlan).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: `Plano de saúde excluído com sucesso.`,
      });
    });
  }
}
