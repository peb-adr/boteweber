import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditableSubscriberComponent } from './editable-subscriber.component';

describe('AdminEditableSubscriberComponent', () => {
  let component: AdminEditableSubscriberComponent;
  let fixture: ComponentFixture<AdminEditableSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditableSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditableSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
