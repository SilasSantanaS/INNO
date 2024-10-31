import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProfessional } from '../../interfaces/professional';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  professionals: IProfessional[] = [];

  constructor(
    private router: Router,
    private professionalService: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.professionals = this.professionalService.GetProfessionals();
  }

  getItemPage(id: number): void {
    this.router.navigate([`/professionals/edit/${id}`]);
  }
}
