import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fourpl_feedbackComponent } from './Fourpl_feedback.component';

describe('Fourpl_feedbackComponent', () => {
  let component: Fourpl_feedbackComponent;
  let fixture: ComponentFixture<Fourpl_feedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fourpl_feedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fourpl_feedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
