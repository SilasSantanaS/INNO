import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-professionals',
  templateUrl: './add-professionals.component.html',
  styleUrl: './add-professionals.component.scss',
})
export class AddProfessionalsComponent implements OnInit {
  form: FormGroup;
  cities: any[] | undefined;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
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
  }

  save(): void {
    this.isLoading = true;

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
