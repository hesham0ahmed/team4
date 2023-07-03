import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetActiveComponent } from './get-active.component';

describe('GetActiveComponent', () => {
  let component: GetActiveComponent;
  let fixture: ComponentFixture<GetActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetActiveComponent]
    });
    fixture = TestBed.createComponent(GetActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
