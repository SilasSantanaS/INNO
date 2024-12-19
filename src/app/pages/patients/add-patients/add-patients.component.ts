import { Router } from '@angular/router';
import { ICity } from '../../../interfaces/city';
import { Component, OnInit } from '@angular/core';
import { IState } from '../../../interfaces/state';
import { IViaCep } from '../../../interfaces/viacep';
import { MenuItem, MessageService } from 'primeng/api';
import { HealthPlanType } from '../../../enums/health-plan-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrl: './add-patients.component.scss',
})
export class AddPatientsComponent implements OnInit {
  form: FormGroup;
  cities: ICity[] = [];
  states: IState[] = [];
  isLoading: boolean = false;
  btnTitle: string = 'Cadastrar';
  breadcrumbItems: MenuItem[] = [];

  readonly healthPlanTypes = [
    {
      id: HealthPlanType.Gold,
      label: 'Ouro',
    },
    {
      id: HealthPlanType.Silver,
      label: 'Prata',
    },
    {
      id: HealthPlanType.Basic,
      label: 'Básico',
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private locationService: LocationService
  ) {
    this.form = this.fb.group({
      city: ['', Validators.required],
      name: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      motherName: ['', Validators.required],
      fatherName: ['', Validators.required],
      nationalId: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      neighborhood: ['', Validators.required],
      healthPlanType: ['', Validators.required],
      healthPlanName: ['', Validators.required],
      healthPlanNumber: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required],
      addressNumber: [undefined, Validators.required],
      birthCertificateNumber: ['', Validators.required],
      additionalAddressInformation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.breadcrumbItems = [
      { label: 'Ver todos os pacientes cadastrados', routerLink: '/patients' },
      {
        label: 'Cadastrar novo paciente',
        routerLink: '/patients/new',
      },
    ];

    this.loadStates();
    this.getAddressByZipCode();
  }

  loadStates(): void {
    this.locationService.listStates().subscribe({
      next: (response: IState[]) => {
        this.states = response;
      },
      error: (error: any) => {
        console.error('Erro ao carregar estados:', error);
      },
    });
  }

  loadCities(): void {
    const uf = this.form.controls['state'].value;

    this.locationService.listCities(uf).subscribe({
      next: (response: ICity[]) => {
        this.cities = response;
      },
      error: (error: any) => {
        console.error('Erro ao carregar cidades:', error);
      },
    });
  }

  save(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Paciente cadastrado com sucesso.',
      });

      this.router.navigate(['./patients']);
    }, 3000);
  }

  getAddressByZipCode(): void {
    let zipCode = this.form.controls['zipCode'].value;
    zipCode = zipCode.replace(/\D/g, '');

    if (!!zipCode) {
      let validateZipCode = /^[0-9]{8}$/;

      validateZipCode.test(zipCode);
    }

    this.locationService
      .getAddressByZipCode(zipCode)
      .subscribe((response: IViaCep) => {
        this.form.patchValue({
          state: response.uf,
          street: response.logradouro,
          neighborhood: response.bairro,
        });

        this.loadCities();

        this.form.patchValue({
          city: response.localidade,
        });
      });
  }
}
