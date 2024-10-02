import { Component, OnInit } from '@angular/core';
import { Professional } from '../../interfaces/professional';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  professionals: Professional[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit(): void {
    this.professionals = this.professionalService.GetProfessionals();
  }
}
