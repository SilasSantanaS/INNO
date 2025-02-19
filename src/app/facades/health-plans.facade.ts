import { Injectable } from '@angular/core';
import {
  HealthPlansService,
  IGetHealthPlansParams,
} from '../services/health-plans.service';
import { HealthPlansStore } from '../stores/health-plans.store';
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
import { IHealthPlan } from '../interfaces/health-plan';

const REFRESH_INTERVAL = 120 * 1000;

@Injectable({
  providedIn: 'root',
})
export class HealthPlansFacade {
  private readonly autoRefresh$ = interval(REFRESH_INTERVAL).pipe(startWith(0));
  private readonly _refresh = new BehaviorSubject(undefined);

  private readonly _filter = new BehaviorSubject<IGetHealthPlansParams>({});
  readonly filter$ = this._filter.asObservable().pipe(distinctUntilChanged());

  private readonly handleRequest$ = combineLatest([
    this.filter$,
    this.autoRefresh$,
    this._refresh.asObservable(),
  ]).pipe(
    switchMap(() =>
      this.getHealthPlans({ ...this._filter.value, pageLimit: 10 })
    )
  );

  readonly healthPlansState$ = combineLatest([
    this.healthPlansStore.healthPlansState$,
    this.handleRequest$,
  ]).pipe(
    map(([state]) => {
      return state;
    }),
    shareReplay({ refCount: true })
  );

  constructor(
    private healthPlansStore: HealthPlansStore,
    private healthPlansService: HealthPlansService
  ) {}

  getHealthPlans(queryParams?: IGetHealthPlansParams) {
    return this.healthPlansService
      .getHealthPlans(queryParams)
      .pipe(
        tap((healthPlans) =>
          this.healthPlansStore.updateHealthPlans(healthPlans)
        )
      );
  }

  getHealthPlanById(id: IHealthPlan['id']) {
    return this.healthPlansService.getHealthPlan(id);
  }

  newHealthPlan(healthPlan: IHealthPlan) {
    return this.healthPlansService
      .newHealthPlan(healthPlan)
      .pipe(
        tap((healthPlan) => this.healthPlansStore.updateHealthPlan(healthPlan))
      );
  }

  updateHealthPlan(id: IHealthPlan['id'], healthPlan: IHealthPlan) {
    return this.healthPlansService
      .editHealthPlan(id, healthPlan)
      .pipe(tap(() => this.healthPlansStore.updateHealthPlan(healthPlan)));
  }

  deleteHealthPlan(healthPlan: IHealthPlan) {
    return this.healthPlansService
      .deleteHealthPlan(healthPlan.id)
      .pipe(tap(() => this.healthPlansStore.deleteHealthPlan(healthPlan)));
  }

  filterHealthPlans(filter: IGetHealthPlansParams) {
    this._filter.next({ ...this._filter.value, ...filter });
  }
}
