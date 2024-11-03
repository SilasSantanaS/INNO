import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { IProfessional } from '../../../interfaces/professional';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessionalService } from '../../../services/professional.service';

@Component({
  selector: 'app-add-professionals',
  templateUrl: './add-professionals.component.html',
  styleUrl: './add-professionals.component.scss',
})
export class AddProfessionalsComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  form: FormGroup;
  date1: Date | undefined;
  date2: Date | undefined;
  cities: any[] | undefined;
  isLoading: boolean = false;
  btnTitle: string = 'Cadastrar';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private professinalService: ProfessionalService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
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
      addressNumber: ['', Validators.required],
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
      { label: 'Profissionais de Saúde', routerLink: '/professionals' },
      {
        label: 'Cadastrar Novo Profissional',
        routerLink: '/professionals/new',
      },
    ];

    this.cities = [
      { name: 'Cardiologista', code: 'CARD' },
      { name: 'Pediatra', code: 'PED' },
      { name: 'Dermatologista', code: 'DERM' },
      { name: 'Neurologista', code: 'NEURO' },
      { name: 'Oftalmologista', code: 'OFT' },
      { name: 'Ortopedista', code: 'ORTO' },
      { name: 'Ginecologista', code: 'GINE' },
      { name: 'Psiquiatra', code: 'PSIQ' },
      { name: 'Clinico Geral', code: 'CLIN' },
      { name: 'Endocrinologista', code: 'ENDO' },
    ];

    this.configureEditComponent();
  }

  configureEditComponent() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      const professional = this.professinalService.getProfessionalById(+id);
      this.form.patchValue(professional);

      this.btnTitle = 'Editar';
    }
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
}
