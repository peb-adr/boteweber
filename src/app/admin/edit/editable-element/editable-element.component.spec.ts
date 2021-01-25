import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditableElementComponent } from './editable-element.component';

describe('AdminEditableElementComponent', () => {
  let component: AdminEditableElementComponent;
  let fixture: ComponentFixture<AdminEditableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditableElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
