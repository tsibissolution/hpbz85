import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MraccountComponent } from './mraccount.component';

describe('MraccountComponent', () => {
  let component: MraccountComponent;
  let fixture: ComponentFixture<MraccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MraccountComponent]
    });
    fixture = TestBed.createComponent(MraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
