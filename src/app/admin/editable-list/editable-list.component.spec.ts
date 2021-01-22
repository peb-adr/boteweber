import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditableListComponent } from './editable-list.component';

describe('EditableListComponent', () => {
  let component: AdminEditableListComponent;
  let fixture: ComponentFixture<AdminEditableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
