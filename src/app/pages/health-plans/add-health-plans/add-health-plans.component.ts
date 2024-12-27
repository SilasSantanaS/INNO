import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-health-plans',
  templateUrl: './add-health-plans.component.html',
  styleUrl: './add-health-plans.component.scss',
})
export class AddHealthPlansComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];

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
  }
}
