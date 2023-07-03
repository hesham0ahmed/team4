import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDirectoryComponent } from './alumni-directory.component';

describe('AlumniDirectoryComponent', () => {
  let component: AlumniDirectoryComponent;
  let fixture: ComponentFixture<AlumniDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniDirectoryComponent]
    });
    fixture = TestBed.createComponent(AlumniDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
