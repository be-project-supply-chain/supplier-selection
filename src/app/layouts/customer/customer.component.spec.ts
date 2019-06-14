import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { customerComponent } from './customer.component';

describe('customerComponent', () => {
  let component: customerComponent;
  let fixture: ComponentFixture<customerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ customerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(customerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
