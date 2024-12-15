import { MenuItem } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrl: './add-patients.component.scss',
})
export class AddPatientsComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  btnTitle: string = 'Cadastrar';
  breadcrumbItems: MenuItem[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.breadcrumbItems = [
      { label: 'Ver todos os pacientes cadastrados', routerLink: '/patients' },
      {
        label: 'Cadastrar novo paciente',
        routerLink: '/patients/new',
      },
    ];
  }
}
