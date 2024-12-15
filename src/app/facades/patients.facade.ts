import { Injectable } from '@angular/core';
import { IGetPatientsParams, PatientsService } from '../services/patients.service';
import { PatientsStore } from '../stores/patients.store';

@Injectable({
  providedIn: 'root',
})
export class PatientsFacade {
  constructor(
    private patientsStore: PatientsStore,
    private patiensService: PatientsService
  ) {}

  getPatients(queryParams?: IGetPatientsParams) {

  }
}
