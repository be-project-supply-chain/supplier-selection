import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { askComponent } from './ask.component';

describe('askComponent', () => {
  let component: askComponent;
  let fixture: ComponentFixture<askComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ askComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(askComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
