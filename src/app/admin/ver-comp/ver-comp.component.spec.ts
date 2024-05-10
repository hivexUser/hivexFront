import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCompComponent } from './ver-comp.component';

describe('VerCompComponent', () => {
  let component: VerCompComponent;
  let fixture: ComponentFixture<VerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
