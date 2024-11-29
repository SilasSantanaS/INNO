import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-patients',
  templateUrl: './dash-patients.component.html',
  styleUrl: './dash-patients.component.scss',
})
export class DashPatientsComponent implements OnInit {
  isLoading: boolean = false;
  breadcrumbItems: MenuItem[] = [];

  ngOnInit(): void {
    this.breadcrumbItems = [
      { label: 'Ver todos os pacientes cadastrados', routerLink: '/patients' },
      {
        label: 'Dashboard de paciente',
        routerLink: '/patients/dashboard',
      },
    ];
  }
}
