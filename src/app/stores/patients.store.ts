import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPatient, IPatients } from '../interfaces/patient';

export interface IPatientsState extends IPatients {}

export const INITIAL_STATE: IPatientsState = {
  metadata: {
    page: 0,
    count: 0,
    pageLimit: 0,
  },
  result: [],
};

@Injectable({
  providedIn: 'root',
})
export class PatientsStore {
  private _patientsState = new BehaviorSubject<IPatientsState>(INITIAL_STATE);
  readonly patientsState$ = this._patientsState.asObservable();

  constructor() {}

  updatePatients(patients: IPatientsState) {
    const state = this._patientsState.value;

    const data = {
      ...state,
      ...patients,
    };

    this._patientsState.next(data);

    return this._patientsState.asObservable();
  }

  updatePatient(patient: IPatient): Observable<IPatientsState> {
    const state = this._patientsState.value;

    const patientIndex = state.result.findIndex(({ id }) => id === patient.id);

    if (patientIndex >= 0) {
      state.result[patientIndex] = {
        ...state.result[patientIndex],
        ...patient,
      };
    } else {
      state.result.push(patient);
    }

    const data = state;

    this._patientsState.next(data);

    return this._patientsState.asObservable();
  }

  deletePatient(patient: IPatient): Observable<IPatientsState> {
    const state = this._patientsState.value;

    const patientIndex = state.result.findIndex(({ id }) => id == patient.id);

    state.result.splice(patientIndex, 1);

    const data = state;

    this._patientsState.next(data);

    return this._patientsState.asObservable();
  }
}
