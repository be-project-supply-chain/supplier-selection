import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sidebar_4plComponent } from './sidebar_4pl.component';

describe('sidebar_4plComponent', () => {
  let component: sidebar_4plComponent;
  let fixture: ComponentFixture<sidebar_4plComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sidebar_4plComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sidebar_4plComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
