import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HealthPlansFacade } from '../../facades/health-plans.facade';

@Component({
  selector: 'app-health-plans',
  templateUrl: './health-plans.component.html',
  styleUrl: './health-plans.component.scss',
})
export class HealthPlansComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];

  constructor(
    private router: Router,
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
}
