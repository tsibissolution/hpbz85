import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportaccountComponent } from './transportaccount.component';

describe('TransportaccountComponent', () => {
  let component: TransportaccountComponent;
  let fixture: ComponentFixture<TransportaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportaccountComponent]
    });
    fixture = TestBed.createComponent(TransportaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
