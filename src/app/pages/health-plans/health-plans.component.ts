import { MenuItem } from 'primeng/api';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IHealthPlan, IHealthPlans } from '../../interfaces/health-plan';
import { HealthPlansFacade } from '../../facades/health-plans.facade';

@Component({
  selector: 'app-health-plans',
  templateUrl: './health-plans.component.html',
  styleUrl: './health-plans.component.scss',
})
export class HealthPlansComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  healthPlans$!: Observable<IHealthPlan[]>;

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nome' },
  ];

  form = this.fb.group({
    search: [],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private healthPlansFacade: HealthPlansFacade
  ) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver planos de saúde',
        routerLink: '/health-plans',
      },
    ];

    this.healthPlans$ = this.healthPlansFacade
      .getHealthPlans()
      .pipe(map((res) => res.result));
  }

  create(): void {
    this.router.navigate(['health-plans/new']);
  }
}
