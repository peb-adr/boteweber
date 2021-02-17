import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudActionPaneComponent } from './crud-action-pane.component';

describe('CrudActionPaneComponent', () => {
  let component: CrudActionPaneComponent;
  let fixture: ComponentFixture<CrudActionPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudActionPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudActionPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
