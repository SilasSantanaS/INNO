import { Injectable } from '@angular/core';
import {
  HealthPlansService,
  IGetHealthPlansParams,
} from '../services/health-plans.service';
import { HealthPlansStore } from '../stores/health-plans.store';

@Injectable({
  providedIn: 'root',
})
export class HealthPlansFacade {
  constructor(
    private healthPlansStore: HealthPlansStore,
    private healthPlansService: HealthPlansService
  ) {}

  getHealthPlans(queryParams?: IGetHealthPlansParams) {
    return this.healthPlansService.getHealthPlans(queryParams);
  }
}
