import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyaccountComponent } from './companyaccount.component';

describe('CompanyaccountComponent', () => {
  let component: CompanyaccountComponent;
  let fixture: ComponentFixture<CompanyaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyaccountComponent]
    });
    fixture = TestBed.createComponent(CompanyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
