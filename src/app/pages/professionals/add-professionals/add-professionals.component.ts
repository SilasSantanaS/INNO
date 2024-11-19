import { Component, OnInit } from '@angular/core';
import { IViaCep } from '../../../interfaces/viacep';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../../services/location.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessionalService } from '../../../services/professional.service';
import {
  ContractType,
  EducationLevel,
  IProfessional,
  ReceivingMethod,
  Role,
} from '../../../interfaces/professional';
import { IState } from '../../../interfaces/state';
import { ICity } from '../../../interfaces/city';

@Component({
  selector: 'app-add-professionals',
  templateUrl: './add-professionals.component.html',
  styleUrl: './add-professionals.component.scss',
})
export class AddProfessionalsComponent implements OnInit {
  form: FormGroup;
  date1: Date | undefined;
  date2: Date | undefined;
  isLoading: boolean = false;
  btnTitle: string = 'Cadastrar';
  cities: ICity[] = [];
  states: IState[] = [];
  breadcrumbItems: MenuItem[] = [];

  readonly receivingMethod = [
    {
      id: ReceivingMethod.Daily,
      label: 'Diária',
    },
    {
      id: ReceivingMethod.Monthly,
      label: 'Fixo Mensal',
    },
    {
      id: ReceivingMethod.Hourly,
      label: 'Por Hora',
    },
  ];

  readonly contractTypes = [
    {
      id: ContractType.CNPJ,
      label: 'CNPJ',
    },
    {
      id: ContractType.CLT,
      label: 'CLT',
    },
    {
      id: ContractType.RPA,
      label: 'RPA',
    },
    {
      id: ContractType.FreeLancer,
      label: 'Free Lancer',
    },
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

  readonly educationalLevels = [
    {
      id: EducationLevel.BasicUncompleted,
      label: 'Fundamental incompleto',
    },
    {
      id: EducationLevel.BasicCompleted,
      label: 'Fundamental completo',
    },
    {
      id: EducationLevel.HighSchoolUncompleted,
      label: 'Médio incompleto',
    },
    {
      id: EducationLevel.HighSchoolCompleted,
      label: 'Médio completo',
    },
    {
      id: EducationLevel.CollegeUncompleted,
      label: 'Superior incompleto',
    },
    {
      id: EducationLevel.CollegeCompleted,
      label: 'Superior completo',
    },
    {
      id: EducationLevel.MastersUncompleted,
      label: 'Pós-superior incompleto',
    },
    {
      id: EducationLevel.MastersCompleted,
      label: 'Pós-superior completo',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private locationService: LocationService,
    private professinalService: ProfessionalService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      role: [, Validators.required],
      specialty: ['', Validators.required],
      nationalId: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      educationLevel: ['', Validators.required],
      academicBackground: ['', Validators.required],
      professionalLicense: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required],

      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      phone2: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      neighborhood: ['', Validators.required],
      addressNumber: [undefined, Validators.required],
      additionalAddressInformation: ['', Validators.required],

      dateOfHire: ['', Validators.required],
      paymentDate: ['', Validators.required],
      contractType: ['', Validators.required],
      receivingMethod: ['', Validators.required],
      paymentInformation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.breadcrumbItems = [
      { label: 'Ver profissionais de saúde', routerLink: '/professionals' },
      {
        label: 'Cadastrar novo profissional',
        routerLink: '/professionals/new',
      },
    ];

    this.loadStates();
    this.configureEditComponent();
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

  configureEditComponent(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    const professional = this.professinalService.getProfessionalById(+id);
    this.form.patchValue(professional);

    this.btnTitle = 'Editar';
  }

  openWhatsApp() {
    const phoneNumber = '5521980900860';
    const message =
      'Olá, profissional de saúde! Tudo bem? Seja bem vindo(a) ao sistema digital INNOMED.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, '_blank');
  }

  print(): void {
    window.print();
  }

  save(): void {
    this.isLoading = true;
    let professional = this.form.value as IProfessional;
    this.professinalService.createProfessinal(professional);

    setTimeout(() => {
      this.isLoading = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Profissional cadastrado com sucesso.',
      });

      this.router.navigate(['./professionals']);
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
