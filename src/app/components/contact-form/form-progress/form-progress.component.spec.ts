import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgressComponent } from './form-progress.component';

describe('FormProgressComponent', () => {
  let component: FormProgressComponent;
  let fixture: ComponentFixture<FormProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProgressComponent]
    });
    fixture = TestBed.createComponent(FormProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
