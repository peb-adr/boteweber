import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubsComponent } from './subs.component';

describe('SubsComponent', () => {
  let component: AdminSubsComponent;
  let fixture: ComponentFixture<AdminSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
