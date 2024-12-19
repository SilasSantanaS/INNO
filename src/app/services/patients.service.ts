import { Injectable } from '@angular/core';
import { IPatient } from '../interfaces/patient';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface IGetPatientsParams {
  search?: string;
  tenantId?: number;
  page?: number;
  pageLimit?: number;
}

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private readonly _http: HttpClient) {}

  getPatients(queryParams?: IGetPatientsParams) {
    return this._http.get<IPatient>('patients', {
      params: queryParams as HttpParams,
    });
  }

  getPatient(id: IPatient['id']) {
    return this._http.get<IPatient>(`patients/${id}`);
  }

  newPatient(patient: IPatient) {
    return this._http.post<IPatient>('patients', patient);
  }

  editPatient(id: IPatient['id'], patient: IPatient) {
    return this._http.put<IPatient>(`patients/${id}`, patient);
  }

  deletePatient(id: IPatient['id']) {
    return this._http.delete<IPatient>(`patients/${id}`);
  }
}
