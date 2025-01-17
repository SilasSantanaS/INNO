import { Injectable } from '@angular/core';
import { ITenant } from '../interfaces/tenant';
import { TenantsStore } from '../stores/tenants.store';
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  interval,
  map,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { IGetTenantsParams, TenantsService } from '../services/tenants.service';

const REFRESH_INTERVAL = 120 * 1000;

@Injectable({
  providedIn: 'root',
})
export class TenantsFacade {
  private readonly autoRefresh$ = interval(REFRESH_INTERVAL).pipe(startWith(0));
  private readonly _refresh = new BehaviorSubject(undefined);

  private readonly _filter = new BehaviorSubject<IGetTenantsParams>({});
  readonly filter$ = this._filter.asObservable().pipe(distinctUntilChanged());

  private readonly handleRequest$ = combineLatest([
    this.filter$,
    this.autoRefresh$,
    this._refresh.asObservable(),
  ]).pipe(
    switchMap(() => this.getTenants({ ...this._filter.value, pageLimit: 10 }))
  );

  readonly tenantsState$ = combineLatest([
    this.tenantsStore.tenantsState$,
    this.handleRequest$,
  ]).pipe(
    map(([state]) => {
      return state;
    }),
    shareReplay({ refCount: true })
  );

  constructor(
    private tenantsStore: TenantsStore,
    private tenantsService: TenantsService
  ) {}

  getTenants(queryParams?: IGetTenantsParams) {
    return this.tenantsService
      .getTenants(queryParams)
      .pipe(tap((tenants) => this.tenantsStore.updateTenants(tenants)));
  }

  getTenantById(id: ITenant['id']) {
    return this.tenantsService.getTenant(id);
  }

  newTenant(tenant: ITenant) {
    return this.tenantsService
      .newTenant(tenant)
      .pipe(tap((tenant) => this.tenantsStore.updateTenant(tenant)));
  }

  updateTenant(id: ITenant['id'], tenant: ITenant) {
    return this.tenantsService
      .editTenant(id, tenant)
      .pipe(tap(() => this.tenantsStore.updateTenant(tenant)));
  }

  deleteTenant(tenant: ITenant) {
    return this.tenantsService
      .deleteTenant(tenant.id)
      .pipe(tap(() => this.tenantsStore.deleteTenant(tenant)));
  }

  filterTenants(filter: IGetTenantsParams) {
    this._filter.next({ ...this._filter.value, ...filter });
  }
}
