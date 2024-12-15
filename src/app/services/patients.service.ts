import { Injectable } from '@angular/core';

export interface IGetPatientsParams {
  search?: string;
  tenantId?: number;
  page?: number;
  pageLimit?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor() { }
}
