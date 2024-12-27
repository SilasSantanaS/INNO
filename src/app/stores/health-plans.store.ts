import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IHealthPlans } from '../interfaces/health-plan';

export interface IHealthPlansState extends IHealthPlans {}

export const INITIAL_STATE: IHealthPlansState = {
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
export class HealthPlansStore {
  private _healthPlansState = new BehaviorSubject<IHealthPlansState>(
    INITIAL_STATE
  );

  constructor() {}

  updateHealthPlans(healthPlans: IHealthPlansState) {
    const state = this._healthPlansState.value;

    const data = { ...state, ...healthPlans };

    this._healthPlansState.next(data);

    return this._healthPlansState.asObservable();
  }
}
