import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { track_order_customerComponent } from './track_order_customer.component';

describe('track_order_customerComponent', () => {
  let component: track_order_customerComponent;
  let fixture: ComponentFixture<track_order_customerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ track_order_customerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(track_order_customerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
