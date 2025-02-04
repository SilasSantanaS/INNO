import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITenant, ITenants } from '../interfaces/tenant';

export interface ITenantsState extends ITenants {}

export const INITIAL_STATE: ITenantsState = {
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
export class TenantsStore {
  private _tenantsState = new BehaviorSubject<ITenantsState>(INITIAL_STATE);
  readonly tenantsState$ = this._tenantsState.asObservable();

  constructor() {}

  updateTenants(patients: ITenantsState) {
    const state = this._tenantsState.value;

    const data = {
      ...state,
      ...patients,
    };

    this._tenantsState.next(data);

    return this._tenantsState.asObservable();
  }

  updateTenant(tenant: ITenant): Observable<ITenantsState> {
    const state = this._tenantsState.value;

    const index = state.result.findIndex(({ id }) => id === tenant.id);

    if (index >= 0) {
      state.result[index] = {
        ...state.result[index],
        ...tenant,
      };
    } else {
      state.result.push(tenant);
    }

    const data = state;

    this._tenantsState.next(data);

    return this._tenantsState.asObservable();
  }

  deleteTenant(tenant: ITenant): Observable<ITenantsState> {
    const state = this._tenantsState.value;

    const index = state.result.findIndex(({ id }) => id == tenant.id);

    state.result.splice(index, 1);

    const data = state;

    this._tenantsState.next(data);

    return this._tenantsState.asObservable();
  }
}
