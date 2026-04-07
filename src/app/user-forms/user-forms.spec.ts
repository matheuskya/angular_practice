import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForms } from './user-forms';

describe('UserForms', () => {
  let component: UserForms;
  let fixture: ComponentFixture<UserForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForms],
    }).compileComponents();

    fixture = TestBed.createComponent(UserForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
