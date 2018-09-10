import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfailedComponent } from './payfailed.component';

describe('PayfailedComponent', () => {
  let component: PayfailedComponent;
  let fixture: ComponentFixture<PayfailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
