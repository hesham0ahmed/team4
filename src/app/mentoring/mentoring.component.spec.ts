import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringComponent } from './mentoring.component';

describe('MentoringComponent', () => {
  let component: MentoringComponent;
  let fixture: ComponentFixture<MentoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentoringComponent]
    });
    fixture = TestBed.createComponent(MentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
