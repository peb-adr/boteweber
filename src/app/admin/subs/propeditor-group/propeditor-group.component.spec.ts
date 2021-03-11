import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPropeditorSubscriberComponent } from './propeditor-subscriber.component';

describe('AdminPropeditorSubscriberComponent', () => {
  let component: AdminPropeditorSubscriberComponent;
  let fixture: ComponentFixture<AdminPropeditorSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPropeditorSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPropeditorSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
