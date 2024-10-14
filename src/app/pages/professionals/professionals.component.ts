import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.scss',
})
export class ProfessionalsComponent implements OnInit {
  cities: any[] | undefined;
  form = this.fb.group({
    search: [],
    selectedCity: [],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  create(): void {
    this.router.navigate(['professionals/new']);
  }
}
