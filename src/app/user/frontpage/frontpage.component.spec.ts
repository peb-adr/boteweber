import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFrontpageComponent } from './frontpage.component';

describe('UserFrontpageComponent', () => {
  let component: UserFrontpageComponent;
  let fixture: ComponentFixture<UserFrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFrontpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
