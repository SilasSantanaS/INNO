import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHealthPlan, IHealthPlans } from '../interfaces/health-plan';

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

  readonly healthPlansState$ = this._healthPlansState.asObservable();

  constructor() {}

  updateHealthPlans(healthPlans: IHealthPlansState) {
    const state = this._healthPlansState.value;

    const data = { ...state, ...healthPlans };

    this._healthPlansState.next(data);

    return this._healthPlansState.asObservable();
  }

  updateHealthPlan(healthPlan: IHealthPlan): Observable<IHealthPlansState> {
    const state = this._healthPlansState.value;
    const index = state.result.findIndex(({ id }) => id === healthPlan.id);

    if (index >= 0) {
      state.result[index] = {
        ...state.result[index],
        ...healthPlan,
      };
    } else {
      state.result.push(healthPlan);
    }

    const data = state;

    this._healthPlansState.next(data);

    return this._healthPlansState.asObservable();
  }

  deleteHealthPlan(healthPlan: IHealthPlan): Observable<IHealthPlansState> {
    const state = this._healthPlansState.value;
    const index = state.result.findIndex(({ id }) => id === healthPlan.id);

    state.result.splice(index, 1);

    const data = state;

    this._healthPlansState.next(data);

    return this._healthPlansState.asObservable();
  }
}
