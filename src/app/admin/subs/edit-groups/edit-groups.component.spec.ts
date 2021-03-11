import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubsEditSubscribersComponent } from './edit-subscribers.component';

describe('AdminSubscriptionsComponent', () => {
  let component: AdminSubsEditSubscribersComponent;
  let fixture: ComponentFixture<AdminSubsEditSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubsEditSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubsEditSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
