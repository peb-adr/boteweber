import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionsComponent } from './subscriptions.component';

describe('AdminSubscriptionsComponent', () => {
  let component: AdminSubscriptionsComponent;
  let fixture: ComponentFixture<AdminSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
