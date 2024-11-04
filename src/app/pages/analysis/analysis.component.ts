import { MenuItem } from 'primeng/api';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.scss',
})
export class AnalysisComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver análises, gráficos e indicadores',
        routerLink: '/analysis',
      },
    ];
  }
}
