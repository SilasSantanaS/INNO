import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  breadcrumbItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Configurações gerais de sistema',
        routerLink: '/settings',
      },
    ];
  }
}
