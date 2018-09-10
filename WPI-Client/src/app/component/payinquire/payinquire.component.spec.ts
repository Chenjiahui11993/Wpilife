import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayinquireComponent } from './payinquire.component';

describe('PayinquireComponent', () => {
  let component: PayinquireComponent;
  let fixture: ComponentFixture<PayinquireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayinquireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayinquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
