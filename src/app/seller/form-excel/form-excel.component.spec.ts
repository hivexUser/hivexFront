import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExcelComponent } from './form-excel.component';

describe('FormExcelComponent', () => {
  let component: FormExcelComponent;
  let fixture: ComponentFixture<FormExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
