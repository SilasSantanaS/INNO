import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-patients',
  templateUrl: './dash-patients.component.html',
  styleUrl: './dash-patients.component.scss',
})
export class DashPatientsComponent implements OnInit {
  items!: string[];
  isLoading: boolean = false;
  breadcrumbItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      { label: 'Ver todos os pacientes cadastrados', routerLink: '/patients' },
      {
        label: 'Dashboard do paciente',
        routerLink: '/patients/dashboard',
      },
    ];

    this.items = Array.from({ length: 10 }).map(
      (_, i) => `Paciente compareceu a sua consulta de número #${i + 1}.`
    );
  }

  showMore(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      this.router.navigate(['patients/new']);
    }, 3000);
  }
}
