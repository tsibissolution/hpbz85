import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrupdationComponent } from './lrupdation.component';

describe('LrupdationComponent', () => {
  let component: LrupdationComponent;
  let fixture: ComponentFixture<LrupdationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrupdationComponent]
    });
    fixture = TestBed.createComponent(LrupdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
