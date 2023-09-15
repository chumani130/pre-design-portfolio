import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzamomtshaComponent } from './mzamomtsha.component';

describe('MzamomtshaComponent', () => {
  let component: MzamomtshaComponent;
  let fixture: ComponentFixture<MzamomtshaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MzamomtshaComponent]
    });
    fixture = TestBed.createComponent(MzamomtshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
