import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessionalsComponent } from './add-professionals.component';

describe('AddProfessionalsComponent', () => {
  let component: AddProfessionalsComponent;
  let fixture: ComponentFixture<AddProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProfessionalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
