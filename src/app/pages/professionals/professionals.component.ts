import { Router } from '@angular/router';
import { ICity } from '../../interfaces/city';
import { IState } from '../../interfaces/state';
import { UploadEvent } from 'primeng/fileupload';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LocationService } from '../../services/location.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProfessional, Role } from '../../interfaces/professional';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.scss',
})
export class ProfessionalsComponent implements OnInit {
  cities: ICity[] = [];
  states: IState[] = [];
  isLoading: boolean = false;
  breadcrumbItems: MenuItem[] = [];
  professionals: IProfessional[] = [];
  form = this.fb.group({
    role: [],
    search: [],
    state: [''],
    city: [''],
  });

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nome' },
    { field: 'role', header: 'Função' },
    { field: 'specialty', header: 'Especialidade' },
    { field: 'professionalLicense', header: 'Registro profissional' },
  ];

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
    private locationService: LocationService,
    private professionalService: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver profissionais de saúde',
        routerLink: '/professionals',
      },
    ];

    this.loadStates();
    this.professionals = this.professionalService.getProfessionals();
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

  editProfessional(professional: IProfessional): void {
    this.router.navigate([`/professionals/edit/${professional.id}`]);
  }

  deleteProfessinal(professional: IProfessional): void {
    this.professionals = this.professionalService.deleteProfessinal(
      professional.id
    );

    this.messageService.add({
      severity: 'success',
      summary: 'Êxito',
      detail: 'Profissional excluído com sucesso.',
    });
  }
}
