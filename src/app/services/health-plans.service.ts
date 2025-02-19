import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IHealthPlan, IHealthPlans } from '../interfaces/health-plan';

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
    return this._http.get<IHealthPlans>(`health-plans`, {
      params: queryParams as HttpParams,
    });
  }

  getHealthPlan(id: IHealthPlan['id']) {
    return this._http.get<IHealthPlan>(`health-plans/${id}`);
  }

  newHealthPlan(healthPlan: IHealthPlan) {
    return this._http.post<IHealthPlan>('health-plans', healthPlan);
  }

  editHealthPlan(id: IHealthPlan['id'], healthPlan: IHealthPlan) {
    return this._http.put<IHealthPlan>(`health-plans/${id}`, healthPlan);
  }

  deleteHealthPlan(id: IHealthPlan['id']) {
    return this._http.delete<IHealthPlan>(`health-plans/${id}`);
  }
}
