import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  form = this.fb.group({
    role: [],
    search: [],
    state: [''],
    city: [''],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

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

  dashboard(): void {
    this.router.navigate(['patients/dashboard']);
  }
}
