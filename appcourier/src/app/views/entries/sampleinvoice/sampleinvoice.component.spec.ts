import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleinvoiceComponent } from './sampleinvoice.component';

describe('SampleinvoiceComponent', () => {
  let component: SampleinvoiceComponent;
  let fixture: ComponentFixture<SampleinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleinvoiceComponent]
    });
    fixture = TestBed.createComponent(SampleinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
