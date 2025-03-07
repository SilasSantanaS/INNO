import { MenuItem } from 'primeng/api';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IPatient } from '../../interfaces/patient';
import { PatientsFacade } from '../../facades/patients.facade';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  patients$!: Observable<IPatient[]>;

  form = this.fb.group({
    role: [],
    search: [],
    state: [''],
    city: [''],
  });

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nome completo' },
    { field: 'role', header: 'CPF' },
    { field: 'specialty', header: 'Data de nascimento' },
    { field: 'professionalLicense', header: 'Plano de saúde' },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private patientsFacade: PatientsFacade
  ) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver todos pacientes cadastrados',
        routerLink: '/patients',
      },
    ];

    this.patients$ = this.patientsFacade
      .getPatients()
      .pipe(map((res) => res.result));
  }

  create(): void {
    this.router.navigate(['patients/new']);
  }

  dashboard(): void {
    this.router.navigate(['patients/dashboard']);
  }

  editPatient(patient: IPatient): void {
    this.router.navigate([`patients/${patient.id}`]);
  }
}
