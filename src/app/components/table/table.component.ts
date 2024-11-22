import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private messageService: MessageService,
    private professionalService: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.professionals = this.professionalService.getProfessionals();
  }

  deleteProfessinal(id: number): void {
    this.professionals = this.professionalService.deleteProfessinal(id);

    this.messageService.add({
      severity: 'success',
      summary: 'Êxito',
      detail: 'Profissional excluído com sucesso.',
    });
  }

  getItemPage(id: number): void {
    this.router.navigate([`/professionals/edit/${id}`]);
  }
}
