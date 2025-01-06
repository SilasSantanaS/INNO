import { Injectable } from '@angular/core';
import { PatientsStore } from '../stores/patients.store';
import {
  IGetPatientsParams,
  PatientsService,
} from '../services/patients.service';
import { IPatient } from '../interfaces/patient';
import { BehaviorSubject, distinctUntilChanged, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientsFacade {
  private readonly _filter = new BehaviorSubject<IGetPatientsParams>({});
  readonly filter$ = this._filter.asObservable().pipe(distinctUntilChanged());

  constructor(
    private patientsStore: PatientsStore,
    private patientsService: PatientsService
  ) {}

  getPatients(queryParams?: IGetPatientsParams) {
    return this.patientsService
      .getPatients(queryParams)
      .pipe(tap((patients) => this.patientsStore.updatePatients(patients)));
  }

  getPatientById(id: IPatient['id']) {
    return this.patientsService.getPatient(id);
  }

  newPatient(patient: IPatient) {
    return this.patientsService
      .newPatient(patient)
      .pipe(tap((patient) => this.patientsStore.updatePatient(patient)));
  }

  updatePatient(id: IPatient['id'], patient: IPatient) {
    return this.patientsService
      .editPatient(id, patient)
      .pipe(tap(() => this.patientsStore.updatePatient(patient)));
  }

  deletePatient(patient: IPatient) {
    return this.patientsService
      .deletePatient(patient.id)
      .pipe(tap(() => this.patientsStore.deletePatient(patient)));
  }

  filterPatients(filter: IGetPatientsParams) {
    this._filter.next({ ...this._filter.value, ...filter });
  }
}
