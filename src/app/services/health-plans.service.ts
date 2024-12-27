import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHealthPlans } from '../interfaces/health-plan';

export interface IGetHealthPlansParams {
  search?: string;
  tenantId?: number;
  page?: number;
  pageLimit?: number;
}

@Injectable({
  providedIn: 'root',
})
export class HealthPlansService {
  constructor(private readonly _http: HttpClient) {}

  getHealthPlans(queryParams?: IGetHealthPlansParams) {
    return this._http.get<IHealthPlans>('health-plans', {
      params: queryParams as HttpParams,
    });
  }
}
