import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { track_order_4plComponent } from './track_order_4pl.component';

describe('track_order_4plComponent', () => {
  let component: track_order_4plComponent;
  let fixture: ComponentFixture<track_order_4plComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ track_order_4plComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(track_order_4plComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
