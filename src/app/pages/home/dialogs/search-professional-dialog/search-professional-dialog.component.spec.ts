import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfessionalDialogComponent } from './search-professional-dialog.component';

describe('SearchProfessionalDialogComponent', () => {
  let component: SearchProfessionalDialogComponent;
  let fixture: ComponentFixture<SearchProfessionalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchProfessionalDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProfessionalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
