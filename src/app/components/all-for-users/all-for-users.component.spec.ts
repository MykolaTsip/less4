import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllForUsersComponent } from './all-for-users.component';

describe('AllForUsersComponent', () => {
  let component: AllForUsersComponent;
  let fixture: ComponentFixture<AllForUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllForUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
