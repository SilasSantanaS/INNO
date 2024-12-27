import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPlansComponent } from './health-plans.component';

describe('HealthPlansComponent', () => {
  let component: HealthPlansComponent;
  let fixture: ComponentFixture<HealthPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
