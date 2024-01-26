import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUpdatesSubscriptionComponent } from './news-subscription.component';

describe('NewsUpdatesSubscriptionComponent', () => {
  let component: NewsUpdatesSubscriptionComponent;
  let fixture: ComponentFixture<NewsUpdatesSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsUpdatesSubscriptionComponent]
    });
    fixture = TestBed.createComponent(NewsUpdatesSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
