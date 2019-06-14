import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourplComponent } from './Fourpl.component';

describe('FourplComponent', () => {
  let component: FourplComponent;
  let fixture: ComponentFixture<FourplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
