import { TestBed } from '@angular/core/testing';

import { HealthPlansService } from './health-plans.service';

describe('HealthPlansService', () => {
  let service: HealthPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
