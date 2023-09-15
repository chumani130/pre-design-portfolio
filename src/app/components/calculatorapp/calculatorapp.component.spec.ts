import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorappComponent } from './calculatorapp.component';

describe('CalculatorappComponent', () => {
  let component: CalculatorappComponent;
  let fixture: ComponentFixture<CalculatorappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorappComponent]
    });
    fixture = TestBed.createComponent(CalculatorappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
