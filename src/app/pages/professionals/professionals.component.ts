import { Router } from '@angular/router';
import { ICity } from '../../interfaces/city';
import { IState } from '../../interfaces/state';
import { UploadEvent } from 'primeng/fileupload';
import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/professional';
import { MenuItem, MessageService } from 'primeng/api';
import { LocationService } from '../../services/location.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.scss',
})
export class ProfessionalsComponent implements OnInit {
  cities: ICity[] = [];
  states: IState[] = [];
  breadcrumbItems: MenuItem[] = [];
  isLoading: boolean = false;
  form = this.fb.group({
    role: [],
    search: [],
    state: [''],
    city: [''],
  });

  readonly roles = [
    {
      id: Role.Psychologist,
      label: 'Psicólogo',
    },
    {
      id: Role.SpeechTherapist,
      label: 'Fonodiólogo',
    },
    {
      id: Role.OccupationalTherapist,
      label: 'Terapeuta Ocupacional',
    },
    {
      id: Role.Pedagogue,
      label: 'Pedagogo',
    },
    {
      id: Role.Physiotherapist,
      label: 'Fisioterapeuta',
    },
    {
      id: Role.TherapeuticCompanion,
      label: 'Acompanhante Terapeutico',
    },
    {
      id: Role.Psychomotrician,
      label: 'Psicomotricista',
    },
    {
      id: Role.Psychiatrist,
      label: 'Psiquiatra',
    },
    {
      id: Role.Others,
      label: 'Outros',
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver profissionais de saúde',
        routerLink: '/professionals',
      },
    ];

    this.loadStates();
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
    const uf = this.form.controls['state'].value!;

    this.locationService.listCities(uf).subscribe({
      next: (response: ICity[]) => {
        this.cities = response;
      },
      error: (error: any) => {
        console.error('Erro ao carregar cidades:', error);
      },
    });
  }

  onUpload(event: UploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }

  create(): void {
    this.router.navigate(['professionals/new']);
  }
}
