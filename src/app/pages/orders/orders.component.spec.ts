import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ordersComponent } from './orders.component';

describe('ordersComponent', () => {
  let component: ordersComponent;
  let fixture: ComponentFixture<ordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
