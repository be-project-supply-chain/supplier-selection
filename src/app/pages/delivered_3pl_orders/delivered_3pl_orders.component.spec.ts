import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { delivered_3pl_ordersComponent } from './delivered_3pl_orders.component';

describe('delivered_3pl_ordersComponent', () => {
  let component: delivered_3pl_ordersComponent;
  let fixture: ComponentFixture<delivered_3pl_ordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ delivered_3pl_ordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(delivered_3pl_ordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
