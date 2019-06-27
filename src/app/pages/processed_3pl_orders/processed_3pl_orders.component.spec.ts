import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { processed_3pl_ordersComponent } from './processed_3pl_orders.component';

describe('processed_3pl_ordersComponent', () => {
  let component: processed_3pl_ordersComponent;
  let fixture: ComponentFixture<processed_3pl_ordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ processed_3pl_ordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(processed_3pl_ordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
