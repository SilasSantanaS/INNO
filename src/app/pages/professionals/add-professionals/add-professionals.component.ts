import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professionals',
  templateUrl: './add-professionals.component.html',
  styleUrl: './add-professionals.component.scss',
})
export class AddProfessionalsComponent implements OnInit {
  cities: any[] | undefined;

  constructor(private router: Router) {}

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
    this.router.navigate(['./professionals']);
  }
}
