import { Injectable } from '@angular/core';
import { ProfessionalService } from '../services/professional.service';
import { ProfessionalsStore } from '../stores/professionals.store';
import { IProfessional } from '../interfaces/professional';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalsFacade {
  constructor(
    private professionalStore: ProfessionalsStore,
    private professionalService: ProfessionalService
  ) {}

  getProfessionalById(id: IProfessional['id']): IProfessional {
    return this.professionalService.getProfessionalById(id);
  }
}
