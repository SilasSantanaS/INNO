import { Component, OnInit } from '@angular/core';
import { IProfessional } from '../../../../interfaces/professional';
import { ProfessionalService } from '../../../../services/professional.service';

@Component({
  selector: 'app-search-patient-dialog',
  templateUrl: './search-patient-dialog.component.html',
  styleUrl: './search-patient-dialog.component.scss',
})
export class SearchPatientDialogComponent implements OnInit {
  visible: boolean = false;
  professionals: IProfessional[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit(): void {
    this.professionals = this.professionalService.getProfessionals();
  }

  showDialog() {
    this.visible = true;
  }
}
