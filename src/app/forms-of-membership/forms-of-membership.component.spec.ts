import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOfMembershipComponent } from './forms-of-membership.component';

describe('FormsOfMembershipComponent', () => {
  let component: FormsOfMembershipComponent;
  let fixture: ComponentFixture<FormsOfMembershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsOfMembershipComponent]
    });
    fixture = TestBed.createComponent(FormsOfMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
