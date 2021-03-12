import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBotbarComponent } from './botbar.component';

describe('UserBotbarComponent', () => {
  let component: UserBotbarComponent;
  let fixture: ComponentFixture<UserBotbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBotbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBotbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
