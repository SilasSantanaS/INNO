import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver todos pacientes cadastrados',
        routerLink: '/patients',
      },
    ];
  }

  create(): void {
    this.router.navigate(['patients/new']);
  }
}
