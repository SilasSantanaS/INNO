import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHealthPlansComponent } from './add-health-plans.component';

describe('AddHealthPlansComponent', () => {
  let component: AddHealthPlansComponent;
  let fixture: ComponentFixture<AddHealthPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHealthPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHealthPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
