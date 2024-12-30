import { Component, OnInit } from '@angular/core';
import { IProfessional } from '../../../../interfaces/professional';
import { ProfessionalService } from '../../../../services/professional.service';

@Component({
  selector: 'app-search-professional-dialog',
  templateUrl: './search-professional-dialog.component.html',
  styleUrl: './search-professional-dialog.component.scss',
})
export class SearchProfessionalDialogComponent implements OnInit {
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
