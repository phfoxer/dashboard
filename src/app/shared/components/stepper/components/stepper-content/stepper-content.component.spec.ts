import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperContentComponent } from './stepper-content.component';

describe('StepperContentComponent', () => {
  let component: StepperContentComponent;
  let fixture: ComponentFixture<StepperContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
