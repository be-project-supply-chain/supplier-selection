import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { order_formComponent } from './order_form.component';

describe('order_formComponent', () => {
  let component: order_formComponent;
  let fixture: ComponentFixture<order_formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ order_formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(order_formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
