import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { track_order_3plComponent } from './track_order_3pl.component';

describe('track_order_3plComponent', () => {
  let component: track_order_3plComponent;
  let fixture: ComponentFixture<track_order_3plComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ track_order_3plComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(track_order_3plComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
