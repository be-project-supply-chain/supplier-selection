import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sidebar_custComponent } from './sidebar_cust.component';

describe('sidebar_custComponent', () => {
  let component: sidebar_custComponent;
  let fixture: ComponentFixture<sidebar_custComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sidebar_custComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sidebar_custComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
