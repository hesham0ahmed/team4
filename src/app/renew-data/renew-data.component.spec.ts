import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewDataComponent } from './renew-data.component';

describe('RenewDataComponent', () => {
  let component: RenewDataComponent;
  let fixture: ComponentFixture<RenewDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenewDataComponent]
    });
    fixture = TestBed.createComponent(RenewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
