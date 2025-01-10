import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenantsComponent } from './add-tenants.component';

describe('AddTenantsComponent', () => {
  let component: AddTenantsComponent;
  let fixture: ComponentFixture<AddTenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTenantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
