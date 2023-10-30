import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleprodComponent } from './sampleprod.component';

describe('SampleprodComponent', () => {
  let component: SampleprodComponent;
  let fixture: ComponentFixture<SampleprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleprodComponent]
    });
    fixture = TestBed.createComponent(SampleprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
