import { Injectable } from '@angular/core';
import { IProfessional } from '../interfaces/professional';
import { ProfessionalsStore } from '../stores/professionals.store';
import { ProfessionalService } from '../services/professional.service';

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
