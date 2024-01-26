import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewForecastComponent } from './view-forecast.component';

describe('ViewForecastComponent', () => {
  let component: ViewForecastComponent;
  let fixture: ComponentFixture<ViewForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewForecastComponent]
    });
    fixture = TestBed.createComponent(ViewForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
