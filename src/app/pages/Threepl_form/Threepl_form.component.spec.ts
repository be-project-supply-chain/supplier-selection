import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Threepl_formComponent } from './Threepl_form.component';

describe('Threepl_formComponent', () => {
  let component: Threepl_formComponent;
  let fixture: ComponentFixture<Threepl_formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Threepl_formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Threepl_formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
